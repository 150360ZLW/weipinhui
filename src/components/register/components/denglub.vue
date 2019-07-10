<template>
    <div>
        <Logo></Logo>
        <div class="pwd-login">
            <div class="pwd-inp">
                <label for="">登录名</label>
                <input type="text" placeholder="请输入手机号或邮箱">
            </div>
            <div class="pwd-inp">
                <label for="">密码</label>
                <input type="password" ref="pwd" placeholder="请输入密码">
                <span class="iconfont" :class="{'icon-yanjing': !isShow, 'icon-yanjing1': isShow}" @click="changeAttr"></span>
            </div>
            <div class="btn">
                <button>登录</button>
                <div>忘记密码？</div>
            </div>
        </div>
        <router-link to="register" tag="div" class="phone-login">
            <span>手机号码注册登录</span>
        </router-link>
    </div>
</template>
<script>
import Logo from './logo'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Logo
  },
  methods: {
    changeAttr () {
      this.isShow = !this.isShow
      if (this.$refs.pwd.type === 'password') {
        this.$refs.pwd.type = 'text'
      } else {
        this.$refs.pwd.type = 'password'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.pwd-login {
    width: 100%;
    .pwd-inp {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #ccc;
        >label {
            width: 100px;
            height: 104px;
            line-height: 104px;
            font-size: 32px;
            margin-left: 20px;

        }
        >input {
            flex: 1;
            background: #fff;
            border: none;
            font-size: 32px;
            height: 102px;padding-left: 12px;
        }
        >span {
            width: 100px;
            height: 104px;
            line-height: 104px;
            text-align: center;
            font-size: 46px;
        }
    }
    .btn {
        width: 100%;
        display: flex;
        margin-top: 40px;
        flex-direction: column;
        >button {
            font-size: 32px;
            color: #fff;
            align-self: center;
            width: 80%;
            border: none;
            background: #de3d96;
            height: 88px;
            border-radius: 16px;
            margin-bottom: 30px;
        }
        >div {
            align-self: flex-end;
            margin-right: 20px;
            font-size: 32px;
            color: #0079ff;
        }
    }
}
.phone-login {
    margin-top: 50px;
    border-top: 1px solid #ccc;
    width: 100%;
    height: 242px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    >span {
        align-self: center;
        width: 280px;
        height: 76px;
        display: inline-block;
        border: 1px solid #de3d96;
        border-radius: 16px;
        color: #de3d96;
        text-align: center;
        line-height: 76px;
        font-size: 32px;
    }
}
</style>
