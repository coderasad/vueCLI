<template>
  <div id="login">
    <div class="container">
      <div class="row justify-content-center">
        <div v-if="show" class="alert alert-danger alert-ar" role="alert">
          Email or Password <a href="#" class="alert-link">Error</a>.
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login </div>

            <div class="card-body">
              <form @submit.prevent="handleLogin()">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" type="email" class="form-control mb-3" v-model="email">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="password" type="password" class="form-control mb-3" v-model="password">
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        email: '',
        password: '',
        userData: null,
        show: false
      }
    },

    methods:{
      async handleLogin(){
        const response = await this.$axios.post('login', {
          email: this.email,
          password: this.password
        });
        this.userData = response.data.message;



        if(!this.userData){
          this.$hub.$emit("afterLogin", true);
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$router.push('/');

        }else{
          this.show = true
          this.$router.push('/login')
        }
      }

    },


  }
</script>

