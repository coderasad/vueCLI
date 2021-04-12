<template>
  <div id="menu">
    <div class="container mb-5 pb-5">
      <div class="row">
        <div class="col-12">

          <nav class="fixed-top navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container-fluid">
              <router-link class="navbar-brand" to="/">
                Laravel
              </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!--  Left Side Of Navbar-->
                <ul class="navbar-nav me-auto">

                </ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto" v-if="isLogin==false">
                  <li class="nav-item" >
                    <router-link class="nav-link" to="/login">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto" v-if="isLogin==true">
                  <li class='nav-item dropdown show' @click="isActive = !isActive">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="true">{{ user.user ? user.user.name : '' }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" :class="{ show: isActive }"
                         aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="" @click.prevent="logout()">
                        Logout
                      </a>
                    </div>
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
  props: ['loginUser'],

  data() {
    return {
      isActive: false,
      user: {},
      isLogin: '',
      text: '',


    }
  },
computed:{
  isFalseLogin(){
    return this.isLogin;
  }

},
  methods: {

    logout() {


      console.log("logout", this.isLogin);
      localStorage.removeItem('user');
      this.isLogin = false;
      this.$router.push('/').catch(() => {
      });

    },

  },
  mounted() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('login', this.isLogin);
      this.isLogin = true
    }
    this.$hub.$on("afterLogin", function (value) {
      console.log("afterLogin", value);
      this.isLogin = value;

      console.log("afterLogin", this.isLogin);
    });
    console.log("isFalseLogin ", this.isFalseLogin);

  },
  watch: {
    isLogin(newVal, oldVal) {
      console.log('new', newVal)
      console.log('oldVal', oldVal)

    }
  }


}
</script>

