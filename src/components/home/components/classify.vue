<template>
    <div>
        <ul class="classifyW">
            <li v-for="(classlist) in classList" :key="classlist.id">
                <img :src="classlist.imgurl" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import {getClassify} from '@/api/index.js'
export default {
  data () {
    return {
      classList: []
    }
  },
  async created () {
    this.classList = await getClassify()
  }
}
</script>
<style lang="less" scoped>
    .classifyW {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 20%;
            img{
                width: 100%;
            }
        }
    }
</style>
