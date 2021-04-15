<template>
  <component v-bind:is="layoutName"></component>
</template>

<script>
  export default{
    computed:{
      layoutName(){
        if (this.$route.meta.length > 0) {
          return this.$route.meta;
        }
        return 'main-layout';
      }
    }
  }
</script>
