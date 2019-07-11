<template>
    <div class="ngus">
        <div class="backgrd"></div>
        <ul class="guess">
            <router-link tag="li" :to="{path: guess.href}" v-for="(guess,index) in guessLike" :key="index">
                <img v-lazy="guess.imgurl">
                <p>{{guess.text}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import {getGuessLike} from '@/api'
export default {
  data () {
    return {
      guessLike: []
    }
  },
  async created () {
    this.guessLike = await getGuessLike()
  }
}
</script>
<style scoped lang="less">
.ngus .backgrd{
  width: 100%;
  height: 140px;
  margin-top: 60px;
  background: url("https://b.appsimg.com/upload/mst/2019/06/03/89/mst_9f60da5f21947cab61182dacdd3bece6.jpg") no-repeat;
  background-size: 100% 736px;
}
.ngus img{
    width: 100%;
}
.ngus .guess{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
}
.ngus .guess li {
    width: 33%;
}
.ngus .guess p{
    font-size: 24px;
    text-align: center;
    color: rgb(69, 69, 69);
}
</style>
