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
    padding: 10px 0;
    width: 100%;
    height: 60px;
    display: flex;
    z-index: 9999;
    .yonghu {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        >i {
            font-size: 52px;
        }
    }
    .fenlei {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        >i {
            font-size: 50px;
        }
    }
    .s-content {
        border-radius: 100px;
        flex:1;
        background: #e9e7e7;
        >i {
            font-size: 48px;
            margin: 0 10px;
        }
        >input {
            height: 48px;
            width: 80%;
            border: none;
            background: none;
        }
    }
}
</style>
