import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '../components/About'
import PlayGame from '../components/PlayGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/PlayGame',
      component: PlayGame
    }
  ]
})
