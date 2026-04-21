<template>
<div>
  <div id="pre" class="your-element-selector" ref="vantaRef">
    <div class="liuzixu">design by LiuZixu</div>

    <div class="hero">
      

      <div class="hero-copy">
        <p class="hero-kicker">I transform ideas into</p>
        <div class="hero-rotating" aria-live="polite">
          <span class="hero-word" :key="currentWord">{{ currentWord }}</span>
        </div>
        <router-link to="/home/who">
          <button class="start transition transform hover:scale-90">Start</button>
        </router-link>
      </div>
      
      <img class="hero-image" src="@/assets/logo.png" alt="site logo">
    </div>
  </div>
</div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  name: 'PreView',
  data() {
    return {
      words: ['Insights.', 'Experiences.', 'Websites.'],
      currentWord: 'Insights.',
      rotateTimer: null,
    }
  },
  mounted() {
    gsap.from('.liuzixu', { opacity: 0, y: -8, duration: 0.25, ease: 'power2.out' })
    gsap.from('.hero-kicker', { opacity: 0, y: 12, duration: 0.28, ease: 'power2.out', delay: 0.02 })
    gsap.from('.hero-rotating', { opacity: 0, y: 12, duration: 0.28, ease: 'power2.out', delay: 0.06 })
    gsap.from('.hero-image', { opacity: 0, x: 18, scale: 0.985, duration: 0.3, ease: 'power2.out', delay: 0.08 })

    let index = 0
    this.rotateTimer = window.setInterval(() => {
      index = (index + 1) % this.words.length
      this.currentWord = this.words[index]
    }, 1600)
  },
  beforeUnmount() {
    if (this.rotateTimer) window.clearInterval(this.rotateTimer)
  },
}
</script>

<style scoped lang="scss">
#pre {
  min-height: 100vh;
  color: #fff;
  background: #000;
}

.liuzixu {
  padding: 24px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.hero {
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw 8vh 8vw;
  gap: 48px;
}

.hero-copy {
  position: relative;
  z-index: 3;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-kicker {
  margin: 0 0 18px;
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: clamp(44px, 5vw, 84px);
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.hero-rotating {
  min-height: 1.05em;
  margin-bottom: 34px;
}

.hero-word {
  display: inline-block;
  font-size: clamp(48px, 5.5vw, 92px);
  line-height: 1;
  font-weight: 400;
}

.cont :deep(a) {
  display: inline-flex;
}

.hero-image {
  display: block;
  width: min(34vw, 340px);
  height: auto;
  object-fit: contain;
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
}

button.start {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 52px;
  margin: 32px 0 0;
  padding: 0 22px;
  border: 2px solid rgba(255, 255, 255, 0.98);
  border-radius: 999px;
  background: #111 !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.14);
  color: #fff !important;
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
  text-shadow: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  z-index: 5;
}

button.start:hover {
  background: #fff !important;
  color: #000 !important;
  border-color: #fff;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 8vh;
  }

  .hero-image {
    width: min(56vw, 260px);
    align-self: flex-end;
  }

  button.start {
    width: 118px;
    height: 46px;
    font-size: 17px;
  }
}
</style>
