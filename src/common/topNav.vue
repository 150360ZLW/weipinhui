<template>
    <div>
        <div class="topNav">
            <div class="zzNav">
                <ul>
                    <router-link tag="li" to="/home">
                        <span>今日推荐</span>
                    </router-link>
                    <router-link tag="li" to="/zuihoufengqiang">
                        <span>最后疯抢</span>
                    </router-link>
                    <router-link tag="li" to="fransnana">
                        <span>母婴</span>
                    </router-link>
                    <router-link tag="li" to="/meizhuang1">
                        <span>美妆</span>
                    </router-link>
                    <router-link tag="li" to="/JiaJv">
                        <span>家居</span>
                    </router-link>
                    <router-link tag="li" to="/appliance">
                        <span>家电</span>
                    </router-link>
                    <router-link tag="li" to="/live">
                        <span>生活</span>
                    </router-link>
                    <router-link tag="li" to="/weipinshe">
                        <span>唯品·奢</span>
                    </router-link>
                    <router-link tag="li" to="/international">
                        <span>国际</span>
                    </router-link>
                    <router-link tag="li" to="/jiajv">
                        <span>家居</span>
                    </router-link>
                </ul>
            </div>
            <i class="iconfont icon-arrow-bottom zzNav-dw"></i>
        </div>
    </div>
</template>

<style scoped lang='less'>
    .topNav {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background: #fff;
        display: flex;
        z-index: 9990;
    }
    .topNav>i {
        width: 50px;
        height: 54px;
    }
   ::-webkit-scrollbar{
       width: 0;
       height: 0;
   }
   .zzNav-dw{
        font-size: 50px;
        background: white;
        padding: 0 24px;
        position: absolute;
        right: 0;
        top: 6px;
        padding: 0 10px;
   }
  .zzNav {
        background: white;
        overflow-x: auto ;
        width: 88%;
        flex: 1;
    }
    .zzNav ul{
        display: flex
    }
    .zzNav ul li{
        margin: 0 20px;
        white-space: nowrap;
        height: 80px
    }
    .zzNav ul li span {
        font-size: 30px;
        height: 76px;
        line-height: 76px
    }
    .router-link-active {
        color: #D75FB1;
        border-bottom: 6px solid #D75FB1
    }
</style>
