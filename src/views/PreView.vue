<template>
<div >
    <div id="pre" class="your-element-selector" ref='vantaRef'>
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="@/assets/logo.png" alt="site logo">
            <p class="zi">Hello, I'm Liu Zixu</p>
            <router-link to="/home/who">
              <button class="start transition transform hover:scale-90">Start</button>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import { gsap } from 'gsap'

export default {
  name: 'PreView',
  mounted() {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.from('.liuzixu', { opacity: 0, y: -16, duration: 0.6 })
    timeline.from('.cont img', { opacity: 0, y: 30, scale: 0.92, duration: 0.8 }, '-=0.2')
    timeline.from('.cont .zi', { opacity: 0, y: 20, duration: 0.5 }, '-=0.45')
    timeline.from('.cont a', { opacity: 0, y: 20, duration: 0.45 }, '-=0.3')
  },
}
</script>

<style scoped lang="scss">
#pre {
    min-height: 100vh;
}

.liuzixu,
.cont {
    color: aliceblue;
}

.liuzixu {
    padding: 24px;
}

.cont {
    position: relative;
    top: 100px;
    z-index: 1;
    width: 100%;
    text-align: center;
}

.cont :deep(a) {
    display: inline-flex;
}

img {
    display: block;
    position: relative;
    margin: 0 auto;
}

button.start {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 74px;
    height: 36px;
    margin: 32px 0;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.28) !important;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
    color: #fff !important;
    font-size: 16px;
    line-height: 1;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
}

button.start:hover {
    background: #fff !important;
    color: #000 !important;
}

</style>
