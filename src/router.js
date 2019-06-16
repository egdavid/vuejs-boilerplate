import Vue from 'vue'
import Router from 'vue-router'
import Authenticator from '@/lib/Authenticator'

import Home from '@/views/Home.vue'
import Repository from '@/views/Repository.vue'
import Profile from '@/views/Profile.vue'

Vue.use(Router)
const auth = new Authenticator()

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
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: auth.requireAuth,
      component: Profile
    },
  ]
})


export default router
