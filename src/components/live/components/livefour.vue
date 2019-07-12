<template>
    <div class="four">
        <img v-lazy="cateList[0]"/>
        <div class="times">
            <div class="timer">
              <i class="hour">{{timer.h}}</i>
              <span>时</span>
              <i class="minute">{{timer.m}}</i>
              <span>分</span>
              <i class="second">{{timer.s}}</i>
              <span>秒</span>
            </div>
        </div>
        <img v-lazy="cateList[1]"/>
    </div>
</template>
<script>
import getTimer from '@/utils/timer.js'
import { setInterval } from 'timers'
import {getLiveFour} from '@/api'
export default {
  async created () {
    this.timer = getTimer('2019-7-12 24:00')
    setInterval(() => {
      this.timer = getTimer('2019-7-12 24:00')
    }, 1000)
    this.cateList = await getLiveFour()
  },
  data () {
    return {
      cateList: [],
      timer: null
    }
  }
}
</script>
<style scoped lang="less">
.four {
      width: 100%;
      img {
          width: 100%
      }
      .times {
          width: 100%;
          height: 242px;
          background: url("http://h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/04/173/15622297600065.jpg");
          background-size: 100% 242px;
      }
    .timer {
      text-align: center;
      i {
          width:74px;
          height: 74px;
          display: inline-block;
          margin-top: 90px;
          background: #fff;
          color: #000;
          border-radius: 10px;
          font-style: normal;
          font-size: 40px;
          line-height: 74px;
          text-align: center;
          &:nth-last-of-type(1) {
                background: #F3344A
            }
      }
      span {
          color: #fff;
          font-size: 40px;
      }
}
}

</style>
