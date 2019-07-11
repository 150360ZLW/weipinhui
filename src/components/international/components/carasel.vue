<template>
  <swiper :options="swiperOption" class="nbox">
    <swiper-slide v-for="(carse, index) in swipercarse" :key="index">
      <img style="width:100%" :src="carse">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getBanner1} from '@/api'
export default {
  async created () {
    this.swipercarse = await getBanner1()
  },
  data () {
    return {
      swipercarse: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    }
  }
}
</script>
<style scoped>
.nbox{
  width: 100%;
  margin-top: 166px;
}
.nbox img{
  width: 100%;
}
</style>
