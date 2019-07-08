import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Fransnana from '@/components/fransnana/fransnana'
import Classify from '@/components/classify/classify'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/fransnana',
      name: 'fransnana',
      component: Fransnana
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }
  ]
})
