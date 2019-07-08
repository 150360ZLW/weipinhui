<template>
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

     <i class="iconfont icon-arrow-bottom zzNav-dw"></i>
     </div>
</template>

<style scoped lang='less'>
   ::-webkit-scrollbar{
       width: 0;
       height: 0;
   }
   .zzNav-dw{
    font-size: 25px;
    background: white;
    padding: 0 12px;
    position: absolute;
    right: 0;
    top: 3px;
    margin-top: 41px
   }
  .zzNav {
        z-index: 9999;
        background: white;
        position: relative;
        overflow-x: auto ;
        width: 88%;
    }
    .zzNav ul{
        display: flex
    }
    .zzNav ul li{
        margin: 0 10px;
        white-space: nowrap;
        height: 38px
    }
    .zzNav ul li span {
        font-size: 15px;
        height: 38px;
        line-height: 38px
    }

    .router-link-active {
        color: #D75FB1;
        border-bottom: 3px solid #D75FB1
    }
</style>
