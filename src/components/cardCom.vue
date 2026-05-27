<template>
  <a
    v-if="isExternal"
    :href="lnk"
    class="card-link"
    :aria-label="na"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="card" :style="ur">
      <div class="card__footer">{{ na }}</div>
    </div>
  </a>

  <router-link v-else :to="lnk" class="card-link" :aria-label="na">
    <div class="card" :style="ur">
      <div v-if="false" class="card__footer">{{ na }}</div>
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
  computed: {
    isExternal() {
      return /^https?:\/\//.test(this.lnk)
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
  width: min(496px, calc(100vw - 48px));
  aspect-ratio: 496 / 280;
  height: auto;
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

.card-link:focus-visible {
  outline: 2px solid rgba(59, 130, 246, 0.7);
  outline-offset: 4px;
  border-radius: 10px;
}

@media (hover: none) {
  .card:active {
    transform: scale(0.985);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.22));
  }
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

@media (max-width: 768px) {
  .card-link {
    margin: 12px 0;
  }

  .card__footer {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
}
</style>
