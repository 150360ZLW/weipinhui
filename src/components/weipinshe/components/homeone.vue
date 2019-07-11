<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img style="width:100%" v-lazy="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getClassname} from '@/api/'
export default {
  name: 'carrousel',
  async created () {
    this.swiperSlides = await getClassname()
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        //  loop: true,
        autoplay: true,
        delay: 1000
      },
      swiperSlides: [

      ]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
