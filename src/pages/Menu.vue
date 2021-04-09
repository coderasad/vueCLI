<template>
  <div id="menu">
    <div class="container mb-5 pb-5">
      <div class="row">
        <div class="col-12">
          <nav class="fixed-top navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container-fluid">
              <a class="navbar-brand" href="">
                Laravel
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!--  Left Side Of Navbar-->
                <ul class="navbar-nav me-auto">

                </ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="" @click.prevent="login()">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data () {
      return {
        loginShow:false
      }
    },
    methods:{
      login(){

      }
    }
  }
</script>

<style>

</style>