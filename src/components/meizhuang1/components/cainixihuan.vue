<template>
    <div class="cainixihuan">
        <img src="https://b.appsimg.com/upload/mst/2019/06/03/89/mst_9f60da5f21947cab61182dacdd3bece6.jpg" alt="">
        <ul class="cainixihuan_content">
            <li v-for="(item,index) in cainixihuan" :key="index">
                <img v-lazy="item.imgurl" alt="">
                <span class="b1">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {getCainixihuan} from '@/api'
export default {
  async created () {
    this.cainixihuan = await getCainixihuan()
  },
  data () {
    return {
      cainixihuan: []
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
    .cainixihuan img{
        width: 100%;
        display: block;
    }
    .cainixihuan{
        position: relative;
    }
    .cainixihuan_content{
        width: 85%;
        position: absolute;
        left: 7.5%;
        bottom: 30px;
    }
    .cainixihuan_content li{
        width: calc(100% / 3);
        position: relative;
        margin: 10px 0;
    }
    .cainixihuan_content{
        display: flex;
        flex-wrap:wrap;
    }
    .cainixihuan_content .b1{
        font-size: 24px;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        height: 46px;
        background: rgba(255, 255, 255, 0.7);
        line-height: 46px;
    }
</style>
