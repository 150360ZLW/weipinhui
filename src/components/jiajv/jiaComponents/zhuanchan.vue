<template>
 <div class="zhuan-top">
   <div class="zhuan-nei">
       <div class="zhuanchan">
       <img :src="name.img1">
     </div>
     <div class="zhuan-shu">
         <p class="font1"><span v-text="name.span1"></span></p>
         <p><span>剩</span><span v-text='timer.d'></span><span>天</span></p>
         <p><span class="font-te" v-text="name.dazhe"></span><span>折起</span></p>
     </div>
   </div>
 </div>
</template>

<script>
import getTimer from '@/utils/timer.js'
export default {
  props: ['name'],
  data () {
    return {
      msg: '',
      timer: ''
    }
  },
  methods: {

  },
  async created () {
    this.timer = getTimer(this.name.span2)
    setInterval(() => {
      this.timer = getTimer(this.name.span2)
    }, 1000)
  }

}
</script>

<style scoped>
  img{width: 100%;}
  .zhuan-top{
    text-align: center;
    margin-top:40px;

  }
  .zhuan-nei{
    width: 90%;
    font-size: 0;
    border-radius:20px;
    overflow: hidden;
    margin: auto;
  }
  .zhuanchan{
    width: 100%;

  }
  .zhuan-shu{
    background: #fff;
  }
  .zhuan-shu p:nth-child(1){
    width:70%;
    display: inline-block;
    text-align: left;
  }
  .zhuan-shu p:nth-child(2){
    width:20%;
    font-size: 24px;
    color: rgb(152, 152, 159);
    display: inline-block;
    text-align: right;
  }
  .zhuan-shu p:nth-child(3){
    width: 100%;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left:5%;
    text-align: left;
    font-size:24px;
  }
  .font-te{
    color:#de3d96
  }
  .font1{
        color: rgb(34, 34, 34);
        font-weight: bold;
        font-family: PingFangSC-Regular;
        font-size:28px;
        padding-top:40px;
  }
</style>
