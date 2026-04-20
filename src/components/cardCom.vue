<template>
  <router-link :to="lnk" class="card-link" :aria-label="na">
    <div class="card" :style="ur">
      <div class="card__footer">{{ na }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardCom',
  props: {
    na: {
      type: String,
      default: '',
    },
    ur: {
      type: Object,
      default: () => ({}),
    },
    lnk: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.card-link {
  display: inline-block;
  margin: 24px;
}

.card {
  width: 496px;
  height: 279px;
  overflow: hidden;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
  transition: transform 0.2s ease, filter 0.2s ease;
}

.card:hover {
  transform: scale(0.98);
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.2));
}

.card__footer {
  position: relative;
  top: 82.08%;
  height: 50px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  color: rgba(0, 0, 0, 0.9);
  line-height: 50px;
  text-align: left;
}
</style>
