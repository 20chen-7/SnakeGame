import { AcGameObject } from "./AcGameObject";
import { Cell } from "./Cell";

export class Snake extends AcGameObject{
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)]; //sava the snake body, cells[0] head  
        this.next_cell = null; //next target 

        this.speed = 5; //snake run 5 cells
        this.direction = -1; //-1 means no instruction, 0,1,2,3 means instructions: up,right,down,left
        this.status = "idle";// idle means static, move means moving, die means failure/death

        this.dr = [-1, 0, 1, 0]; //rows' derivations;
        this.dc = [0, 1, 0, -1]; //cols' derivations;

        this.step = 0; // means #turns
        this.eps = 1e-2; //allowable error

        this.eye_direction = 0;
        if (this.id === 1) this.eye_direction = 2; //left bot, up; right top, down

        this.eye_dx = [ //snake eyes derivation x
            [-1,1],
            [1, 1],
            [1,-1],
            [-1,-1],
        ];
        this.eye_dy = [ //snake eyes derivation y
            [-1,-1],
            [-1,1],
            [1, 1],
            [1,-1],
        ];
    }

    start() {

    }

    set_direction(d) {
        this.direction = d;
    }

    check_tail_increasing() { // detect current snake tail increase or not
        if (this.step <= 10) return true;
        if (this.step % 3 === 1) return true; 
        return false;
    }

    next_step() { //change the status to move next step
        const d = this.direction;
        this.next_cell = new Cell(this.cells[0].r + this.dr[d], this.cells[0].c + this.dc[d]);
        this.eye_direction = d;
        this.direction = -1; //empty instruction
        this.status = "move";
        this.step ++ ;
        //add new cell
        const k = this.cells.length;
        for (let i = k; i > 0 ; i -- ) {
            this.cells[i] = JSON.parse(JSON.stringify(this.cells[i - 1])); //avoid using same val. copy /= referenced
        }

        if (!this.gamemap.check_valid(this.next_cell)) { //next invalid instruction
            this.status = "die";
        }
    }

    update_move() { 
        const dx = this.next_cell.x - this.cells[0].x;
        const dy = this.next_cell.y - this.cells[0].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.eps) { // arrive the targets
            this.cells[0] = this.next_cell; // add new cell for snakes;
            this.next_cell = null; 
            this.status = "idle"; // end

            if (!this.check_tail_increasing()) { // when snake not increase, cut the last one.
                this.cells.pop() 
            }
        } else {
            const move_distance = this.speed * this.timedelta / 1000; //distance between two frames
            this.cells[0].x += move_distance * dx / distance;
            this.cells[0].y += move_distance * dy / distance;

            if (!this.check_tail_increasing()) {
                const k = this.cells.length;
                const tail = this.cells[k - 1], tail_target = this.cells[k - 2];
                const tail_dx = tail_target.x - tail.x;
                const tail_dy = tail_target.y - tail.y;
                tail.x += move_distance * tail_dx / distance;
                tail.y += move_distance * tail_dy / distance; 
            }
        }
    }

    update() { //update every frame
        if (this.status === 'move'){
            this.update_move(); 
        }

        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        if (this.status === "die") {
            ctx.fillStyle = "white";
        }
        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2 * 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
        for (let i = 1; i < this.cells.length; i ++ ) {
            const a = this.cells[i - 1], b = this.cells[i];
            if (Math.abs(a.x - b.x) < this.eps && Math.abs(a.y - b.y) < this.eps)
                continue;
            if (Math.abs(a.x - b.x) < this.eps) {
                ctx.fillRect((a.x - 0.4) * L, Math.min(a.y, b.y) * L, L * 0.8, Math.abs(a.y - b.y) * L);
            }else {
                ctx.fillRect(Math.min(a.x, b.x) * L, (a.y - 0.4) * L, Math.abs(a.x - b.x) * L, L * 0.8);
            }
        }
        ctx.fillStyle = "black";
        for (let i = 0; i < 2 ; i++ ) {
            const eye_x = (this.cells[0].x + this.eye_dx[this.eye_direction][i] * 0.15) * L;
            const eye_y = (this.cells[0].y + this.eye_dy[this.eye_direction][i] * 0.15) * L;
            ctx.beginPath();
            ctx.arc(eye_x, eye_y, L * 0.05, 0, Math.PI * 2);
            ctx.fill();
        } 
    }
}