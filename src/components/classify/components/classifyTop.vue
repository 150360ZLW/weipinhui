<template>
    <div class="wb-classify">
        <router-link to="home" tag="span" class="iconfont icon-mjiantou-copy wb-icon"></router-link>
        <div class="wb-content">
            <span class="content-l" ref="classify" @click="changeBg(1)">分类</span>
            <span class="content-r" ref="brand" @click="changeBg(2)">品牌</span>
        </div>
        <router-link to="home" tag="span" class="iconfont icon-home wb-icon"></router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    changeBg (index) {
      if (index === 1) {
        this.$refs.classify.style.background = '#ccc'
        this.$refs.brand.style.background = '#fbfbfa'
      } else if (index === 2) {
        this.$refs.classify.style.background = '#fbfbfa'
        this.$refs.brand.style.background = '#ccc'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wb-classify {
    width: 100%;
    height: 100px;
    line-height: 100px;
    display: flex;
    overflow: hidden;
    background: #fbfbfa;
    .wb-icon {
        width: 60px;
        height: 60px;
        font-size: 60px;
        padding: 10px 20px;
    }
    .wb-content {
        flex: 1;
        display: flex;
        justify-content: center;
        >span {
            width: 200px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            margin:  20px 0;
            border: 1px solid #929292;
            border-radius: 1px solid #ccc;
        }
        .content-l {
            border-radius: 10px 0 0 10px;
            background: #ccc;
        }
        .content-r{
            border-radius: 0 10px 10px 0;
        }
    }
}
</style>
