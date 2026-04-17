<template>
  <div class="app-shell">
    <div ref="coverRef" class="page-cover" aria-hidden="true">
      <div class="page-cover__text">Loading</div>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :css="false" @leave="leave" @enter="enter">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const coverRef = ref(null)

const enter = (el, done) => {
  gsap.killTweensOf([el, coverRef.value])
  gsap.set(el, { opacity: 0, y: 12, scale: 0.995 })
  gsap.set(coverRef.value, { yPercent: 0, autoAlpha: 1 })

  const tl = gsap.timeline({ onComplete: done })
  tl.to(coverRef.value, {
    yPercent: -100,
    duration: 0.24,
    ease: 'power2.inOut',
  }).to(el, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.22,
    ease: 'power3.out',
  }, '-=0.12')
}

const leave = (el, done) => {
  gsap.killTweensOf([el, coverRef.value])
  gsap.set(coverRef.value, { yPercent: -100, autoAlpha: 0 })

  const tl = gsap.timeline({ onComplete: done })
  tl.to(el, {
    opacity: 0,
    y: -8,
    scale: 0.994,
    duration: 0.16,
    ease: 'power2.inOut',
  }).to(coverRef.value, {
    yPercent: 0,
    autoAlpha: 1,
    duration: 0.24,
    ease: 'power2.inOut',
  }, '-=0.02')
}
</script>

<style lang="scss">
* {
  cursor: url('/Frame9.svg'), auto;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
}

body {
  padding: 0;
  overflow-x: hidden;
  background: #000;
}

#app {
  min-height: 100vh;
  background: #000;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  background: #000;
}

.page-cover {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05), transparent 24%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.04), transparent 28%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(17, 24, 39, 0.98));
  transform: translateY(-100%);
  opacity: 0;
}

.page-cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    radial-gradient(rgba(255, 255, 255, 0.06) 0.8px, transparent 0.8px);
  background-size: 30px 30px, 30px 30px, 8px 8px;
  opacity: 0.38;
}

.page-cover__text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  letter-spacing: 0.32em;
  text-indent: 0.32em;
  text-transform: uppercase;
}

#pre {
  min-height: 100vh;
  background: rgb(0, 0, 0);
  background-attachment: fixed;

  .liuzixu {
    color: aliceblue;
    padding: 24px;
  }

  .cont {
    position: relative;
    top: 100px;
    z-index: 1;
    width: 100%;
    color: aliceblue;
    text-align: center;
  }

  .cont img {
    filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.18));
  }

  .test {
    position: relative;
    bottom: -150px;
    z-index: 1;
    width: auto;
    height: auto;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    text-align: center;
    cursor: default;
  }

  .start {
    width: 74px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid white;
    color: white;
    background: none;
    font-size: 16px;
    margin: 16px 0;
    position: static;
  }

  .start:hover {
    color: rgb(0, 0, 0);
    background: white;
  }
}

.home {
  min-height: 100vh;
  background-color: rgb(244, 246, 255);

  .nav {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 67px;
    line-height: 4px;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(12px);

    a {
      display: inline-block;
    }

    img {
      position: relative;
      top: 12px;
    }

    .navkuaiu {
      margin: 8px 24px;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;

      &.router-link-exact-active {
        color: rgba(255, 255, 255, 0.9);
      }
    }

    .navkuaiu:hover {
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      font-weight: 500;
    }
  }

  .color1 {
    background-color: #000;
  }

  .color2 {
    background-color: rgb(244, 246, 255);
  }

  .whoheigt {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    padding-top: 100px;
    background-color: #fafcfd;

    .whocont {
      width: 92%;
      height: 90%;
      margin: auto;
      text-align: center;
    }

    .whodiv {
      display: inline-block;
      max-width: 80%;
      margin: 24px 24px 0;
      padding-bottom: 0;
      color: rgba(255, 255, 255, 0.75);
      text-align: left;
    }

    img {
      position: relative;
      top: 32px;
      margin: auto;
    }
  }
}
</style>
