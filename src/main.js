// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/reset.css'
import '@/assets/css/fonts.css'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
<<<<<<< HEAD
=======
import '@/assets/reset.css'
import '@/assets/common.css'
>>>>>>> 6676371042ce82aa75b5ef0894996b030d15f62b
import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.jpg',
  loading: '../static/loading.gif',
  attempt: 1
})

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.jpg',
  loading: '../static/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
