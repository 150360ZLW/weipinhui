<template>
  <swiper v-if='swiperSlides && swiperSlides.length > 0' :options="swiperOption" style="height:166px">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img style="width:100%" :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>

</template>

<script>
import {getMuBanner} from '@/api'
export default {
  name: 'carrousel',
  /* created () {
    getBanner().then(function (data) {
      this.swiperSlides = data
    })
  }, */
  async created () {
    this.swiperSlides = await getMuBanner()
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swiperSlides: [

      ]
    }
  },
  mounted () {
    /* setInterval(() => {
      console.log('simulate async data')
      if (this.swiperSlides.length < 10) {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      }
    }, 3000) */
  }
}
</script>
<style scoped>

</style>
