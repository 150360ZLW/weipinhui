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

     </div>
</template>

<style scoped lang='less'>
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
    margin-top: 82px
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
        margin: 0 20px;
        white-space: nowrap;
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
