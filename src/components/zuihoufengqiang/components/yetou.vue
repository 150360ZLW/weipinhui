<template>
        <div class="zuihoufengqiang1">
            <div class="zuihoufengqiang">
                <i class="iconfont icon-mjiantou-copy"></i>
                <span class="fengqiang">最后疯抢</span>
            </div>
            <img v-lazy="yetou[0]" alt="">
            <img v-lazy="yetou[1]" alt="">
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
        height: 100px;
        display: flex;
    }
    .zuihoufengqiang .icon-mjiantou-copy{
        height: 100px;
        line-height: 100px;
        font-size: 70px;
    }
    .zuihoufengqiang .fengqiang{
        display: inline-block;
        height: 100px;
        line-height: 100px;
        font-size: 40px;
        flex: 1;
        text-align: center;
        transform: translateX(-20px)
    }
    .zuihoufengqiang1 img{
        width: 100%;
        display: block;
    }
</style>
