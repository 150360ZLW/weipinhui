import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Fransnana from '@/components/fransnana/fransnana'
import Classify from '@/components/classify/classify'
import Appliance from '@/components/appliance/appliance'
import Zuihoufengqiang from '@/components/zuihoufengqiang/zuihoufengqiang'
import Meizhuang1 from '@/components/meizhuang1/meizhuang1'
import Register from '@/components/register/register'
import DengluB from '@/components/register/components/denglub'
import JiaJv from '@/components/jiajv/JiaJv'
import Live from '@/components/live/live'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页-今日推荐'
      }
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/fransnana',
      name: 'fransnana',
      component: Fransnana,
      meta: {
        title: '母婴'
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
      meta: {
        title: '唯品会VIP特卖会'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '登录页面'
      }
    },
    {
      path: '/denglub',
      name: 'denglub',
      component: DengluB,
      meta: {
        title: '登录页面'
      }
    },
    // 田定茂
    {
      path: '/appliance',
      name: 'appliance',
      component: Appliance,
      meta: {
        title: '家电'
      }
    },
    // lfz
    {
      path: '/zuihoufengqiang',
      name: 'Zuihoufengqiang',
      component: Zuihoufengqiang,
      meta: {
        cache: false,
        title: '最后疯抢'
      }
    },

    // 李沛钊
    {
      path: '/jiajv',
      name: 'jiajv',
      component: JiaJv,
      meta: {
        cache: false,
        title: '家居'
      }
    },
    {
      path: '/meizhuang1',
      name: 'Meizhuang1',
      component: Meizhuang1,
      meta: {
        cache: false,
        title: '美妆'
      }
    },
    // nmm
    {
      path: '/international',
      name: 'International',
      component: () => import('@/components/international/international'),
      meta: {
        title: '国际'
      }
    },
    // 豆欣欣
    {
      path: '/Live',
      name: 'Live',
      component: Live
    }
  ]
})
