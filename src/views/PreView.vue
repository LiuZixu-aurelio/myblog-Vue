<template>
<div>
  <div id="pre" class="your-element-selector" ref="vantaRef">
    <div ref="brand" class="liuzixu">design by LiuZixu</div>

    <div class="hero">
      <div class="hero-copy">
        <p ref="kicker" class="hero-kicker">I transform ideas into</p>
        <div ref="rotating" class="hero-rotating" aria-live="polite">
          <span class="hero-word" :key="currentWord">{{ currentWord }}</span>
        </div>
        <router-link to="/home/who">
          <button ref="startBtn" class="start">Start</button>
        </router-link>
      </div>

      <img ref="logo" class="hero-image" src="@/assets/logo.png" alt="site logo">
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
      wordAnimating: false,
    }
  },
  mounted() {
    gsap.fromTo(
      this.$refs.startBtn,
      { opacity: 0, y: 26, rotate: -8, scale: 0.82 },
      { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 0.75, ease: 'elastic.out(1, 0.55)', delay: 0.14 },
    )

    let index = 0
    this.rotateTimer = window.setInterval(() => {
      if (this.wordAnimating) return
      this.wordAnimating = true

      const currentEl = this.$refs.rotating?.querySelector('.hero-word')
      if (currentEl) {
        gsap.to(currentEl, {
          opacity: 0,
          y: -14,
          scale: 0.98,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            index = (index + 1) % this.words.length
            this.currentWord = this.words[index]
            this.$nextTick(() => {
              const nextEl = this.$refs.rotating?.querySelector('.hero-word')
              if (nextEl) {
                gsap.fromTo(
                  nextEl,
                  { opacity: 0, y: 14, scale: 0.98 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    onComplete: () => {
                      this.wordAnimating = false
                    },
                  },
                )
              } else {
                this.wordAnimating = false
              }
            })
          },
        })
      } else {
        index = (index + 1) % this.words.length
        this.currentWord = this.words[index]
        this.wordAnimating = false
      }
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
  color: rgba(255, 255, 255, 0.68);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero {
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(24px, 4vw, 48px);
  padding: 0 clamp(24px, 12vw, 12vw) 8vh;
}

.hero-copy {
  position: relative;
  z-index: 3;
  display: flex;
  flex: 1 1 560px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 70vw;
}

.hero-kicker {
  margin: 0 0 18px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(44px, 5vw, 84px);
  font-style: italic;
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
  font-weight: 400;
  line-height: 1;
}

.hero-image {
  position: relative;
  z-index: 1;
  display: block;
  flex: 0 0 auto;
  width: min(34vw, 340px);
  height: auto;
  object-fit: contain;
}

button.start {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 56px;
  margin-top: 32px;
  padding: 0 22px;
  border: 2px solid rgba(255, 255, 255, 0.98);
  background: #111 !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.14);
  color: #fff !important;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
}

button.start:hover {
  background: #fff !important;
  border-color: #fff;
  color: #000 !important;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 8vh;
  }

  .hero-copy {
    max-width: 100%;
  }

  .hero-image {
    width: min(56vw, 260px);
    align-self: flex-end;
  }

  button.start {
    width: 112px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
  }
}
</style>