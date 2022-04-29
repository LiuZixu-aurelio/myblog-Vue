<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>作品</h2>
            <cardcom v-bind:title='scard'></cardcom>
        </div>
    </div>
</template>

<script>
import cardcom from '../components/cardCom.vue'
import scard from '../pages/zhihu.js'

export default {
  name: 'ProjectView',
  components: { cardcom }
}
</script>
