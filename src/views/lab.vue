<template>
  <div class="whoheigt color2">
    <div class="whocont">
      <h2>实验室</h2>
      <CardCom
        v-for="item in labItems"
        :key="item.id"
        :na="item.title"
        :ur="item.cover"
        :lnk="item.path"
      />
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { labDetailRoutes } from '../pages/works.js'

export default {
  name: 'LabView',
  components: { CardCom },
  data() {
    return {
      labItems: labDetailRoutes,
    }
  },
}
</script>
