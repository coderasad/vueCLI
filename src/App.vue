<template>
  <div id="app">
    <Menu :loginUser="loginUser"/>
    <router-view :user="user" />
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
      user : {}
    }
  },

  computed:{
    loginUser(){
      return JSON.parse(localStorage.getItem('user'));
    }

  },

}
</script>
