<template>
    <div class="cate">
        <ul>
            <router-link tag="li" :to="{path: cate.href}" v-for="(cate,index) in cateList" :key="index">
                <img :src="cate.imgurl" alt="">
            </router-link>
        </ul>
    </div>
</template>
<script>
import {getHomeCate} from '@/api'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = await getHomeCate()
  }
}
</script>
<style scoped>
.cate ul {
    display: flex;
    flex-wrap: wrap;
}
.cate ul li {
    width: 20%;
}

.cate ul li img {
    width: 100%;
}

</style>
