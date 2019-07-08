<template>
    <div class="search">
        <div class="yonghu">
            <i class="iconfont icon-yonghu"></i>
        </div>
        <div class="s-content">
            <i class="iconfont icon-iconfontfangdajing"></i>
            <input type="text" placeholder="大家正在搜索:连衣裙">
        </div>
        <div class="fenlei">
            <router-link tag="i" to="classify" class="iconfont icon-leimupinleifenleileibie"></router-link>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.search {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    padding: 5px 0;
    width: 100%;
    height: 30px;
    display: flex;
    z-index: 9999;
    .yonghu {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        >i {
            font-size: 26px;
        }
    }
    .fenlei {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        >i {
            font-size: 26px;
        }
    }
    .s-content {
        border-radius: 50px;
        flex:1;
        background: #e9e7e7;
        >i {
            font-size: 24px;
            margin: 0 5px;
        }
        >input {
            height: 24px;
            width: 80%;
            border: none;
            background: none;
        }
    }
}
</style>
