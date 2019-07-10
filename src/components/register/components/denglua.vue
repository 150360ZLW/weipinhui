<template>
    <div>
      <div class="login">
          <div class="user">
              <label class="label" for="username">手机号</label>
              <input class="inp-style" style="height:51px;" id="username" type="text" placeholder="请输入手机号">
          </div>
          <div class="pwd">
              <label class="label" for="password">验证码</label>
              <input class="inp-style" style="border-right: 1px solid #ccc;" id="password" type="text" placeholder="请输入验证码">
              <span>获取验证码</span>
          </div>
      </div>
      <div class="denglu">
          <span>手机号注册登录</span>
          <p>
              <i class="iconfont" :class="{'icon-xuanzhongkuang': isShow, 'icon-weixuanzhongkuang':!isShow}" @click="changeShow"></i>
              同意<span>《隐私条款》</span>、<span>《唯品会服务条款》</span>、<span>《唯品支付用户服务协议》</span>
          </p>
      </div>
      <div class="password-login">
          <router-link to="./denglub" tag="span">密码登录</router-link>
      </div>
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
.login {
    width: 100%;
    height: 208px;
    .label {
        display: inline-block;
        line-height: 104px;
        width: 130px;
        height: 104px;
        font-size: 32px;
        text-align: center;
        margin-left: 10px;
    }
    .inp-style {
        border: none;
        // background: #fff;
        font-size: 32px;
    }
    .user {
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        >input {
            flex: 1;
        }
    }
    .pwd {
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        >span {
            display: inline-block;
            width: 240px;
            text-align: center;
            align-self: center;
            font-size: 32px;
            color: #98989f;
        }
        >input {
            flex: 1;
        }
    }
}
.password-login {
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #cccc;
    margin-top: 10px;
    >span {
        align-self: center;
        display: inline-block;
        text-align: center;
        line-height: 76px;
        font-size: 28px;
        border-radius: 10px;
        width: 202px;
        height: 76px;
        border: 1px solid #de3d96;
        color: #de3d96;
    }
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
