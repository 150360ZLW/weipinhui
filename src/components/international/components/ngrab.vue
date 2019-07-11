<template>
  <div class="ngb">
    <div class="back"></div>
    <div class="box">
      <ul class="myul">
        <li v-for="(lite,intex) in kuailite"
            :key="intex">
          <div class="box1">
            <img v-lazy="lite.img">
            <img v-lazy="lite.imgurl">
            <p><span>{{lite.text}}</span><span>{{lite.money}}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getGrabList} from '@/api'
export default {
  async created () {
    this.kuailite = await getGrabList()
  },
  data () {
    return {
      kuailite: [

      ]
    }
  }
}
</script>
<style scoped>
.ngb .back{
  width: 100%;
  height: 160px;
  background: url("https://b.appsimg.com/upload/mst/2019/06/25/23/mst_a4f3c642dae2cae7067cf6923e26b4d7.jpg") no-repeat;
  background-size: 100% 450px;
}
.ngb .box1 img{
  width: 100%;
}
.ngb .myul li{
  width: 25%;
}
.ngb .myul {
  display: flex;
  list-style: none;
}
.ngb .box1 img:nth-child(2) {
  width: 88px;
  height: 44px;
  margin-left: 60px;
}
.ngb .box1 p {
  font-size: 24px;
  text-align: center;
  color:#de3d96;
}
.ngb .box1 p span:nth-child(1) {
  width: 64px;
  height: 32px;
  color: #fff;
  background-color: #de3d96;
}
</style>
