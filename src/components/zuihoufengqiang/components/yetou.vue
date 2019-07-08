<template>
        <div class="zuihoufengqiang1">
            <div class="zuihoufengqiang">
                <router-link tag="i" to="home" class="iconfont icon-mjiantou-copy"></router-link>
                <span class="fengqiang">最后疯抢</span>
            </div>
            <img :src="yetou[0]" alt="">
            <img :src="yetou[1]" alt="">
        </div>
</template>
<script>
import {getYetou} from '@/api'
export default {
  data () {
    return {
      yetou: []
    }
  },
  async created () {
    this.yetou = await getYetou()
  }
}
</script>
<style scoped lang='less'>
    .zuihoufengqiang{
        width: 100%;
        height: 50px;
        display: flex;
    }
    .zuihoufengqiang .icon-mjiantou-copy{
        height: 50px;
        line-height: 50px;
        font-size: 35px;
    }
    .zuihoufengqiang .fengqiang{
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        flex: 1;
        text-align: center;
        transform: translateX(-20px)
    }
    .zuihoufengqiang1 img{
        width: 100%;
        display: block;
    }
</style>
