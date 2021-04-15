import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import './axios'
import axios from "axios"


Vue.prototype.$axios = axios

Vue.config.productionTip = false

if(localStorage.getItem('user')){
  Vue.prototype.$loginUser=JSON.parse(localStorage.getItem('user'));
}else {
  Vue.prototype.$loginUser = {};
}
  Vue.component('main-layout', require('./MainLayout.vue').default);
  Vue.component('login', require('./pages/Login').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

