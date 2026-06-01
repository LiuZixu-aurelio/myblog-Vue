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

<style lang="scss">
.whocont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.whocont > h2 {
  width: 100%;
}

.whocont::after {
  content: '';
  flex: 1 1 496px;
  max-width: 496px;
  margin: 24px;
}
</style>
