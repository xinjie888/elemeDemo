import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
import Order from '@/components/Order'
import  Myzone from '@/components/Myzone'
import  Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },{
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/myzone',
      name: 'Myzone',
      component: Myzone
    },{
      path: '/login/:id',
      name: 'Login',
      component: Login
    }
  ]
})
