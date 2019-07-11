<template>
    <div class="nsilde">
        <ul>
            <router-link tag="li" :to="{path: slide.href}" v-for="(slide,index) in slideList" :key="index">
                <img v-lazy="slide.img" alt="">
            </router-link>
        </ul>
    </div>
</template>
<script>
import {getLeftslide} from '@/api'
export default {
  async created () {
    this.slideList = await getLeftslide()
  },
  data () {
    return {
      slideList: []
    }
  }
}
</script>
<style scoped lang="less">
//去滚动条
::-webkit-scrollbar {
    width: 100%;
}
.nsilde {
    font-size: 0;
    width:100%;
    background:white;
    overflow-x:auto;
    ul{
        width:1308px;
        li {
            width: 218px;
            display:inline-block;
            img {
                width: 100%;
            }
        }
    }

}
</style>
