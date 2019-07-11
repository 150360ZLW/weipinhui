<template>
 <div>
     <div class="fenlei">
         <div>
             <ul>

                 <router-link tag="li"  :to="{path:item.imgUrl}" v-for='(item,index) in world' :key="index">
                     <div><img v-if="item.imgUrl" :src="item.imgUrl"></div>

                 </router-link>
             </ul>
         </div>
     </div>
 </div>
</template>

<script>
import {getMuFenLei} from '@/api'
export default {
  data () {
    return {

      world: ''
    }
  },
  methods: {

  },
  async created () {
    this.world = await getMuFenLei()
  }
}
</script>

<style scoped>
    ul{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
    }
    li{
        width:20%;

    }
    li div{
        box-sizing:border-box;
        display: block;
        width: 100%;

    }
    img{
        width: 100%;
    }
    p{
        text-align: center;
        font-size: 13px;
        color: rgba(34, 34, 34, 0.93);
    }
</style>
