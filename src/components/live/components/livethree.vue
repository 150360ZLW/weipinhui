<template>
    <div  class="box">
         <!-- 产品 -->
         <!-- <img class="img1" src="https://b.appsimg.com/upload/mst/2019/06/24/183/mst_cdafaac44bea2acacc24d6c66438087c.jpg"> -->
       <ul class="myul">
          <li v-for="(product) in productList" :key="product.indx">
              <div class="box1">
              <img class="img2" v-lazy="product.img"/>
              <!-- <br> -->
              <img class="img3" v-lazy="product.imgg">
              <p><span>{{product.wenzi}}</span><span>￥{{product.price}}</span></p>
              </div>
          </li>
      </ul>
   </div>
</template>

<script>
import {getLiveThree} from '@/api'

export default {
  async created () {
    this.productList = await getLiveThree()
    // this.productList = await getLiveThreetop()
  },
  data () {
    return {
      productList: []
    }
  }
}
</script>

<style scoped lang="less">
.box {
  // 去掉横向滚动条
  overflow-x:hidden;
  width: 100%;
  height: 450px;
  background: url("https://b.appsimg.com/upload/mst/2019/06/20/49/mst_773cabc3a7d4b21bdf0f3b7d4bc2f183.jpg");
  background-size: 100% 450px;
}
.myul {
  padding-top: 100px;
}
.box1 {
  width: 25%;
  height: 320px;
}
.box1 .img2 {
  width: 100%;
  height: 184px;
  margin-left: 20px;
}
.box1 .img3 {
  width: 80px;
  height: 40px;
  margin-left: 80px;
}
.myul li {
  display: inline;
}
.box1 {
  float: left;
}
.box1 p {
  font-size: 24px;
  color: #de3d96;
  text-align: center;
}
.box1 p span:nth-child(1) {
  width: 80px;
  height: 32px;
  font-size: 20px;
  color: #fff;
  background-color:#de3d96;
}
</style>
