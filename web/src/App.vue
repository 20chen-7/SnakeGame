<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'


export default {
  components: {
    NavBar
  },
  setup(){
    // $.ajax({
    //   url: "http://localhost:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: 'gyf',
    //     password: 'gyf456',
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });
    // $.ajax({
    //   url: "http://localhost:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMjFmY2E3ZGJlNDc0ZWVmODRjN2RlNGFlNTlkMzM1MyIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY2MTg3ODAxNSwiZXhwIjoxNjYzMDg3NjE1fQ.DNTBjkdgrjD_Pv1TyMdtJ4s2SQRFNub1NVYhmxTwl1c"
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });
    // $.ajax({
    //   url: "http://localhost:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username:"cxy123",
    //     password:"cxy123",
    //     confirmedPassword:"cxy123",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });
  }
}
</script>
<style>
body {
  background-image: url("./assets/images/background.png");
  background-size: cover;
}
</style>
