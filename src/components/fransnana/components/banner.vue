<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in bannerList" :key="index">
        <img style="width:100%" :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import {getFransnanaBanner} from '@/api/index.js'
export default {
  async created () {
    this.bannerList = await getFransnanaBanner()
    console.log(this.bannerList)
  },
  data () {
    return {
      bannerList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    }
  },
  components: {

  }
}
</script>
<style lang="less" scoped>

</style>
