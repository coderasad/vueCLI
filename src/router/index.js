import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {path: '/', component: Home, meta: {}},
    {path: '/login', component: Login, meta: 'login'},
    {path: '/register', component: Register, meta: {}},
  ]
})
