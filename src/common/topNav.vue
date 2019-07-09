<template>
<<<<<<< HEAD
<div>
   <div class="zzNav">
        <ul>
            <router-link tag="li" to="/zuihoufengqiang">
                <span>最后疯抢</span>
            </router-link>
            <router-link tag="li" to="/meizhuang1">
                <span>美妆</span>
            </router-link>
        </ul>
   </div>

=======
    <div class="topNav">
        <div class="zzNav">
            <ul>
                <router-link tag="li" to="/home">
                    <span>今日推荐</span>
                </router-link>
                <router-link tag="li" to="/zuihoufengqiang">
                    <span>最后疯抢</span>
                </router-link>
                <router-link tag="li" to="/meizhuang1">
                    <span>美妆</span>
                </router-link>
                <router-link tag="li" to="/appliance">
                    <span>家电</span>
                </router-link>
            </ul>
        </div>
        <i class="iconfont icon-arrow-bottom zzNav-dw"></i>
>>>>>>> 6676371042ce82aa75b5ef0894996b030d15f62b
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
   ::-webkit-scrollbar{
       width: 0;
       height: 0;
   }
   .zzNav-dw{
    font-size: 50px;
    background: white;
<<<<<<< HEAD
    padding: 0 24px;
    position: absolute;
    right: 0;
    top: 6px;
    margin-top: 82px
=======
    padding: 0 10px;
>>>>>>> 6676371042ce82aa75b5ef0894996b030d15f62b
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
<<<<<<< HEAD
=======
        height: 80px
>>>>>>> 6676371042ce82aa75b5ef0894996b030d15f62b
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
