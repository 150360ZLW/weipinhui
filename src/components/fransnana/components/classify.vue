<template>
    <div>
        <ul class="wb-c-content">
            <li v-for="item in wbClassifyList" :key="item.id" class="c-main">
                <div class="c-main-img">
                    <img :src="item.imgUrl" alt="">
                </div>

                <span v-text="item.title"></span>
            </li>
        </ul>
    </div>
</template>
<script>
import {getWbClassify} from '@/api'
export default {
  async created () {
    this.wbClassifyList = await getWbClassify()
  },
  data () {
    return {
      wbClassifyList: []
    }
  }
}
</script>
<style lang="less" scoped>
.wb-c-content {
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .c-main {
        width: 20%;
        height: 100px;
        >span {
            display: inline-block;
            padding: 5px 0 0 0 ;
            font-size: 14px;
            width: 100%;
            text-align: center;
        }
       .c-main-img {
           width: 60px;
           height: 60px;
           border-radius: 50%;
           background: #e9e9e9;
           margin: 0 auto;
           >img{
               width:100%;
           }
       }
    }
}
</style>
