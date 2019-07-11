<template>
    <div>
        <Logo></Logo>
        <DengLuA></DengLuA>
    </div>
</template>
<script>
import DengLuA from './components/denglua.vue'
import Logo from './components/logo'
export default {
  components: {
    DengLuA,
    Logo
  }
}
</script>
<style lang="less" scoped>

.logo-wrapper {
    width: 100%;
    height: 340px;
    background: url(https://mlogin.vip.com/asserts/img/login_bg.3a93a8bf.jpg);
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

</style>
