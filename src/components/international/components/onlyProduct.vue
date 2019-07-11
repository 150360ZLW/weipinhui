<template>
    <div>
        <ul class="nproduct">
            <router-link tag="li" :to="{path: product.href}" v-for="(product,index) in onlyproduct" :key="index">
                <img v-lazy="product.imgurl">
                <div class="box">
                <p class="txt1"><span>{{product.text}}</span><span>{{product.time}}</span></p>
                <p class="txt2"><span>{{product.discount}}</span><span>{{product.distext}}</span></p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import {getOnlyproduct} from '@/api'
export default {
  data () {
    return {
      onlyproduct: []
    }
  },
  async created () {
    this.onlyproduct = await getOnlyproduct()
  }
}
</script>
<style scoped>
.nproduct{
    background: #f7f7f7;
    margin-top: 50px;
    overflow-x:auto;
    /* overflow:hidden; */
}
.nproduct .box{
    width: 96%;
    height: 80px;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-left: 2%;
    background-color: #ffffff;
    border-radius:0 0 18px 18px;
}
.nproduct li{
    width: 100%;
    margin-top: 40px;
}
.nproduct img{
    width: 96%;
    margin-left: 2%;
}
.nproduct li img:nth-child(1){
    border-radius: 18px 18px 0 0;
}
.nproduct .txt2{
    margin-top: 10px;
}
/* .txt1 span{
    display: block;
    height: 18px;
} */
.nproduct .txt1 span:nth-child(1){
    font-size: 0.373333rem;
    font-family: PingFangSC-Regular;
    color: rgb(34, 34, 34);
    font-weight: bold;
    font-size: 30px;
    margin-left:2%;
}
.nproduct .txt1 span:nth-child(2){
    color: rgb(152, 152, 159);
    font-size: 26px;
    text-align: right;
    float: right;
    margin-right: 2%;
}
.nproduct .txt2 span:nth-child(1){
    font-size: 26px;
    color: rgb(222, 61, 150);
    font-family: PingFangSC-Regular;
    margin-left:2%;
}
.nproduct .txt2 span:nth-child(2){
    font-size: 26px;
    font-family: PingFangSC-Regular;
    color: rgb(88, 92, 100);
}
</style>
