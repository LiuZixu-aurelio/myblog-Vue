<template>
  <div class='whoheigt color2'>
    <div class="whocont">
      <h2>思考</h2>
      <CardCom
        v-for="item in talkDetailRoutes"
        :key="item.id"
        :na="item.title"
        :ur="item.cover"
        :lnk="item.path"
      ></CardCom>
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { talkDetailRoutes } from '../pages/works.js'

export default {
  name: 'TalkView',
  components: { CardCom },
  data() {
    return {
      talkDetailRoutes,
    }
  },
}
</script>
