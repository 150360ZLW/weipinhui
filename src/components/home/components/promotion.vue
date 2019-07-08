<template>
    <div class="pmt-wrapper">
        <div class="pmt-title">
            <p>今日特卖·10点上新</p>
        </div>
        <div v-for="(item,index) in todayList" :key="index" class="pmt-content">
            <img :src="item.imgUrl" alt="">
            <div class="pmt-c-title">
                <p v-text="item.title"></p>
                <div class="zhekou">
                    <span style="color:rgb(222,61,150);padding: 0 5px;" v-text="item.zhekou"></span>
                    <span v-text="item.total" v-if="item.total"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getTodaySale} from '@/api/index.js'
export default {
  async created () {
    this.todayList = await getTodaySale()
  },
  data () {
    return {
      todayList: []
    }
  }
}
</script>
<style lang="less" scoped>
.pmt-wrapper{
    background: #dfdede;
}
.pmt-title {
    width: 100%;
    font-size: 26px;
    margin: 5px 0;
    >p {
        width: 100%;
        text-align: center;
        color: rgb(34, 34, 34);
        height: 60px;
        line-height: 60px;
    }
}
.pmt-content {
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
    overflow: hidden;
    >img {
        width: 100%;
    }
    .pmt-c-title {
        background: #fff;
        margin-top: -4px;
        border-radius: 0 0 10px 10px;
        width: 100%;
        height: 73px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        >p {
            padding-left: 10px;
            font-size: 18px;
        }
        .zhekou {
            padding-left: 8px;
            font-size: 14px;
        }
    }
}
</style>
