<template>
    <div class="left-wrapper">
        <ul class="left-nav">
            <li v-for="(item,index) in leftNavList" :class="{active: currentIndex===index}" :key="index" @click="changeBg(index)">
                <span v-text="item"></span>
            </li>
        </ul>
    </div>
</template>

<script>
import {getWbLeftNav} from '@/api/index.js'
export default {
  data () {
    return {
      leftNavList: [],
      currentIndex: 0
    }
  },
  async created () {
    this.leftNavList = await getWbLeftNav()
  },
  methods: {
    changeBg (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.left-wrapper{
    &::-webkit-scrollbar{
        display: none;
    }
    width: 100px;
    height: calc(100% - 120px);
    overflow-y: auto;
    .left-nav{
        width: 100px;
        background: #f3f4f5;
        box-sizing: border-box;
        overflow: hidden;
        >li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            box-sizing: border-box;
            >span {
                display: inline-block;
                height: 100%;
                border-bottom: 1px solid rgb(228, 221, 221);
            }
        }
}
}

.active {
    background:#fff;
    border-left: 5px solid red;
}
</style>
