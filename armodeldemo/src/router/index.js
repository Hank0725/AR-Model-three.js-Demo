import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddModel from '../views/AddModel.vue'
import Notfound from '../views/Notfound.vue'
import Init from '../views/Init.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init
  },
  {
    path: '/home',
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

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.prototype.$goRoute = function (name, isCheck) {
  //router.push({ name: name });
  if (isCheck != undefined && isCheck === true) {
    if (this.$store.state.currentPage != name) {
      router.replace({ name: name });
    }
  }
  else {
    //防止重複
    router.replace({ name: name });
  }
}

const router = new VueRouter({
  routes
})

export default router
