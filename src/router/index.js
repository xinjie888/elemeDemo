import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'

import Order from '@/components/Homepage.1'

import  Myzone from '@/components/Homepage.2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },{
      path: '/order',
      name: 'Homepage',
      component: Order
    },{
      path: '/myzone',
      name: 'Homepage',
      component: Myzone
    }
  ]
})
