<template>
  <div id="app">
    <Menu :user="user" />
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
      user: null,
    }
  },
  mounted() {
    this.user = (JSON.parse(localStorage.getItem('user')));
  }
}
</script>

<style >

</style>
