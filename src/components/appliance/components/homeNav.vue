<template>
  <swiper :options="swiperOption" class="box">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img style="width:100%" v-lazy="slide.imgurl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getCarousel } from '@/api'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swiperSlides: []
    }
  },
  async created () {
    this.swiperSlides = await getCarousel()
  }
}
</script>

<style scoped>
</style>
