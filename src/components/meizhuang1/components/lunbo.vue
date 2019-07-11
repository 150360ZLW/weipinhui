<template>
  <swiper :options="swiperOption" v-if="swiperSlides.length">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img style="width:100%" :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getBanner} from '@/api'
export default {
  name: 'carrousel',
  async created () {
    this.swiperSlides = await getBanner()
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        loop: true,
        onSlideChangeEnd: function (swiper) {
          swiper.update()
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      swiperSlides: []
    }
  },
  mounted () {

  }
}
</script>
<style>
  .swiper-pagination-bullet-active {
    background: #000;
  }
  .swiper-pagination-bullet{
    border: 2px solid #fff;
    width:12px;
    height: 12px;
  }
</style>
