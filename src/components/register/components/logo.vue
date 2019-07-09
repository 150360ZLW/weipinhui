<template>
    <div>
        <div class="logo-wrapper">
            <img src="https://mlogin.vip.com/asserts/img/logo.ac5608f4.png" alt=""/>
            <router-link tag="span" to="/home" class="iconfont icon-cha"></router-link>
        </div>
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
    </div>
</template>
<script>
export default {
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
        // align-self: flex-start;
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

</style>
