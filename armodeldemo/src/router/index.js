import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddModel from '../views/AddModel.vue'
import Notfound from '../views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addmodel',
    name: 'AddModel',
    component: AddModel
  },
  {
    path: '/model',
    name: 'Model',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Model.vue')
  }, {
    path: '*',
    name: '404Notfound',
    component: Notfound
  }
]

const router = new VueRouter({
  routes
})

export default router
