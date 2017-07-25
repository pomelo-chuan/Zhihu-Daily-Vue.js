import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
