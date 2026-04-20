<template>
  <div class="whoheigt">
    <div class="whocont">
      <h2>作品</h2>
      <div class="list">
        <CardCom
          v-for="item in projectCards"
          :key="item.id"
          :na="item.title"
          :ur="item.cover"
          :lnk="item.path"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { projectCards } from '../pages/works.js'

export default {
  name: 'ProjectView',
  components: {
    CardCom,
  },
  data() {
    return {
      projectCards,
    }
  },
}
</script>

<style lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
