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

                <ul class="navbar-nav ms-auto" >
                  <li class='nav-item dropdown show' @click="isActive = !isActive">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="true">{{ loginUserData.user ? loginUserData.user.name: '' }}
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

  data() {
    return {
      isActive: false,
      loginUserData: {}
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  },

  mounted () {
    this.loginUserData = this.$loginUser;
  },

}
</script>

