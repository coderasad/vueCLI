<template>
  <div id="app">
    <Menu :loginUserData = 'loginUserData' />
    <router-view />
  </div>
</template>

<script>

  import Menu from "./pages/Menu";

  export default {
    name: 'App',
    components: {
      Menu
    },
    data(){
      return{
        loginUserData: {},
      }
    },
    mounted() {
      this.loginUserData = (JSON.parse(localStorage.getItem('user')));
    }

  }
</script>
