<template>
    <div class="cate1">
        <ul>
            <router-link tag="li" :to="{path: cate.href}" v-for="(cate,index) in cateList" :key="index">
                <img v-lazy="cate.imgurl" alt="">
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
.cate1 ul {
    display: flex;
    flex-wrap: wrap;
}
.cate1 ul li {
    width: 20%;
}

.cate1 ul li img {
    width: 100%;
}
</style>
