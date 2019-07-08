<template>
  <div class="box">
    <ul class="myul">
      <li v-for="(lite,intex) in kuailite" :key="intex">
        <div class="box1">
          <img v-lazy="lite.img">
          <img v-lazy="lite.imgurl">
          <p><span>{{lite.text}}</span><span>{{lite.money}}</span></p>
        </div>
      </li>
    </ul>
    <div class="box2">
      <img src="http://127.0.0.1:3000/images/appliance/jiadian/1.gif"/>
    </div>
  </div>
</template>
<script>
import { getTkuai } from '@/api'
export default {
  data () {
    return {
      kuailite: []
    }
  },
  async created () {
    this.kuailite = await getTkuai()
  }

}
</script>
<style scoped>
.box {
  width: 100%;
  height: 225px;
  background: url("http://127.0.0.1:3000/images/appliance/jiadian/6.jpg");
  background-size: 100% 225px;
}
.myul {
  padding-top: 80px;
}
.box1 {
  width: 25%;
  height: 160px;
}
.box1 img:nth-child(1) {
  width: 100%;
  height: 93px;
  margin-left: 10px;
}
.box1 img:nth-child(2) {
  width: 40px;
  height: 20px;
  margin-left: 30px;
}
.myul li {
  display: inline;
}
.box1 {
  float: left;
}
.box1 p {
  font-size: 12px;
  text-align: center;
}
.box1 p span:nth-child(1) {
  width: 32px;
  height: 16px;
  color: #fff;
  background-color: red;
}
.box2 {
  width: 100%;
}
.box2 img {
  width: 100%;
}
</style>
