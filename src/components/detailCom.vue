<template>
  <div class="whoheigt color2">
    <div class="whocont">
      <h2>{{ na }}</h2>
      <div class="detail-images">
        <img v-for="(item, index) in im" :key="index" :src="item" class="detail-image" alt="detail image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCom',
  props: {
    na: String,
    im: Array,
  },
}
</script>

<style scoped>
.detail-images {
  width: 100%;
}

.detail-image {
  width: min(1000px, 100%);
  display: block;
  margin: 24px auto 0;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .detail-image {
    margin-top: 12px;
  }
}
</style>
