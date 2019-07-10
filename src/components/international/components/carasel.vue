<template>
  <swiper :options="swiperOption"
          class="nbox">
    <swiper-carse v-for="(carse, index) in swipercarse"
                  :key="index">
      <img style="width:100%"
           :src="carse">
    </swiper-carse>
    <!-- <div class="swiper-pagination"
         slot="pagination"></div> 指示器圆点去掉-->
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swipercarse: [

      ]
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
