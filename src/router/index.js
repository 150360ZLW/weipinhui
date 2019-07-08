import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Fransnana from '@/components/fransnana/fransnana'
import Classify from '@/components/classify/classify'
import Appliance from '@/components/appliance/appliance'
import Zuihoufengqiang from '@/components/zuihoufengqiang/zuihoufengqiang'
import Meizhuang1 from '@/components/meizhuang1/meizhuang1'
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
    },
    {
      path: '/appliance',
      name: 'appliance',
      component: Appliance
    },
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
    },
    // 田定茂
    {
      path: '/appliance',
      name: 'appliance',
      component: Appliance
    },
    // lfz
    {
      path: '/zuihoufengqiang',
      name: 'Zuihoufengqiang',
      component: Zuihoufengqiang,
      mete: {
        cache: false
      }
    },
    {
      path: '/meizhuang1',
      name: 'Meizhuang1',
      component: Meizhuang1,
      mete: {
        cache: false
      }
    }
  ]
})
