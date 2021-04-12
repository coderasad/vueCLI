import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import './axios'
import axios from "axios"


Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.prototype.$hub = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

