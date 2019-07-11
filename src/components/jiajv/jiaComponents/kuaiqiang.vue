<template>
 <div class="qiang">
     <div class="qiang-top">
         <img v-if="kuai[0]" :src="kuai[0][0]&&kuai[0][0].img">
     </div>
     <div class="qiang-bottom">
         <ul>
             <router-link tag="li" :to="{path:item.imgUrl} " v-for='(item,index) in kuai[1]' :key='index'>
                <div>
                    <img v-if="item" :src="item.img1">
                    <p><img v-if="item" :src="item.img2"></p>
                </div>
                <p class="qiang-jia">
                    <span v-if="item" v-text="item.span1"></span>
                    <span v-if="item" v-text="item.span2"></span>
                </p>
             </router-link>
         </ul>
     </div>

 </div>
</template>

<script>

import {getKuaiQiang} from '@/api'
export default {
  data () {
    return {
      msg: '',
      kuai: ''
    }
  },
  methods: {

  },
  async created () {
    this.kuai = await getKuaiQiang()
  },
  components: {

  }
}
</script>

<style scoped>
    .qiang{
        position: relative;
    }
    .qiang-top{
        width: 100%;
        padding-top:40px ;

    }
    .qiang-top img{
        width: 100%;
    }
    .qiang-bottom{
        width: 100%;
        position: absolute;
        top:35%;

    }
    .qiang-bottom ul{
        width: 100%;
         display: flex;
         flex-direction: row;

        justify-content: center;
    }
    .qiang-bottom ul li{
        width: 25%;
        display: inline-block;
        text-align: center
    }
     .qiang-bottom ul li div img{
         width: 88%;
     }

     .qiang-bottom ul li div p img{
         width: 50%;
     }
     .qiang-bottom ul li div p{
         padding-bottom: 20px;
     }
     .qiang-jia span:first-child{
         display: inline-block;
         font-size: 24px;
         color: #fff;
         padding:0 8px;
         background: rgb(222 61 150);
     }
     .qiang-jia span:last-child{
         font-size: 28px;
         color: #de3d96
     }
     .qiang-jia{
         position: relative;
         top:-10px;
     }
</style>
