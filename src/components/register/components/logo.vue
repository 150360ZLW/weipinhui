<template>
    <div>
        <div class="logo-wrapper" v-for="(item,index) in logoImg" :key="index" :style="{background: item.logo_bg}">
            <img :src="item.logo" alt=""/>
            <router-link tag="span" to="/home" class="iconfont icon-cha"></router-link>
        </div>
    </div>
</template>
<script>
import {getRegister} from '@/api/index.js'
export default {
  data () {
    return {
      logoImg: []
    }
  },
  async created () {
    this.logoImg = await getRegister()
  }
}
</script>
<style lang="less" scoped>
.logo-wrapper {
    width: 100%;
    height: 340px;
    // background: url(https://mlogin.vip.com/asserts/img/login_bg.3a93a8bf.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    >img {
        width: 250px;
    }
    >span {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 44px;
    }
}
</style>
