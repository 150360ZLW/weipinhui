<template>
    <div class="nplay">
        <ul>
            <router-link tag="li" :to="{path: cate.href}" v-for="(cate,index) in cateList" :key="index">
                <img v-lazy="cate.imgurl" alt="">
            </router-link>

        </ul>
    </div>
</template>

<script>
import {getComptPlay} from '@/api'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = await getComptPlay()
  }
}
</script>
<style scoped>
.nplay{
  overflow-x:auto;
}

.nplay ul{
  display: flex;
  list-style: none;
}
.nplay ul li{
    width: 20%;
}
.nplay ul li img{
    width:100%;
}
</style>
