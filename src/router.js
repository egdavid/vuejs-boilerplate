import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Repository from '@/views/Repository.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'repository',
      name: 'repository',
      component: Repository
    }
  ]
})


export default router
