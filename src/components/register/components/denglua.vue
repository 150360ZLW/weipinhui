<template>
    <div class="denglu">
        <span>手机号注册登录</span>
        <p>
            <i class="iconfont" :class="{'icon-xuanzhongkuang': isShow, 'icon-weixuanzhongkuang':!isShow}" @click="changeShow"></i>
            同意<span>《隐私条款》</span>、<span>《唯品会服务条款》</span>、<span>《唯品支付用户服务协议》</span>
        </p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    changeShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="less" scoped>
.icon-xuanzhongkuang{
    color: #de3d96;
}
.icon-weixuanzhongkuang {
    color: #ccc;
}
.denglu {
    width: 100%;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >span {
        display: inline-block;
        width: 80%;
        height: 88px;
        background: #de3d96;
        font-size: 32px;
        color: #fff;
        text-align: center;
        line-height: 88px;
        border-radius: 8px;
    }
    p{
        width: 80%;
        font-size: 28px;
        color: #ccc;
        padding: 24px 0 48px 0;
        >i {
            font-size: 44px;
        }
        span {
            color: #157efa;
        }
    }
}
</style>
