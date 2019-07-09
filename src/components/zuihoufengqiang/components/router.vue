<template>
    <div>
        <div class="fengqiangyugao">
            <p class="on" @click="toggle1">今日疯抢(11)</p>

            <p @click="toggle2">下期预告(1)</p>

        </div>
        <Fqyg1 v-if="showP"></Fqyg1>
        <Fqyg2 v-if="!showP"></Fqyg2>
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
  methods: {
    toggle1 () {
      this.showP = true
      var p1 = document.querySelector('.fengqiangyugao')
      p1.children[0].setAttribute('class', 'on')
      p1.children[1].setAttribute('class', '')
    },
    toggle2 () {
      this.showP = false
      var p1 = document.querySelector('.fengqiangyugao')
      p1.children[1].setAttribute('class', 'on')
      p1.children[0].setAttribute('class', '')
    }
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
        height: 100px;
        width: 100%;
        line-height: 100px;
        font-size: 32px;
    }
    .fengqiangyugao .on{
        color: #ED4396;
        border-bottom: 4px solid #ED4396
    }
</style>
