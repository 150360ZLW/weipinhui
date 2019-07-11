<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img style="width:100%" :src="slide">
    </swiper-slide>
    <!-- 去掉下面的小圆点 -->
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import {getBanner2} from '@/api'
export default {
  name: 'carrousel',
  async created () {
    this.swiperSlides = await getBanner2()
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: []
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 1) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  }
}
</script>
