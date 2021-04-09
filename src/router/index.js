import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
/*import Answer from "@/pages/Answer";*/


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
/*  {
    path: '/answer',
    name: 'Answer',
    component: Answer
  },*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
