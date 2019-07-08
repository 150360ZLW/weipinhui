<template>
    <div>
        <div class="fengqiangyugao">
            <p class="on">今日疯抢()</p>
            <p>下期预告()</p>

        </div>
        <Fqyg1 v-if="true"></Fqyg1>
        <Fqyg2 v-if="false"></Fqyg2>
    </div>
</template>

<script>
import Fqyg1 from './fqyg1.vue'
import Fqyg2 from './fqyg2.vue'
export default {
  data () {
    return {
      showP: true
    }
  },
  mounted () {

  },
  method () {

  },
  components: {
    Fqyg1,
    Fqyg2
  }
}
</script>
<style>
    .fengqiangyugao{
        display: flex;
        justify-content: space-around;
        height: 50px;
        width: 100%;
        line-height: 50px;
    }
    .fengqiangyugao .on{
        color: #ED4396;
        border-bottom: 2px solid #ED4396
    }
</style>
