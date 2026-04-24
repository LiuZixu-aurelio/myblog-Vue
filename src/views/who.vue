<template>
<div id="who">
  <section class="hero">
    <div class="hero-main">
      <div class="hero-left">
        <div class="hero-left__line"></div>
        <div class="hero-left__group">
          <div class="hero-left__item">Product Design</div>
          <div class="hero-left__item">UX/UI Design</div>
          <div class="hero-left__item">Independent Developer</div>
        </div>
        <div class="hero-left__line hero-left__line--bottom"></div>
        <a class="hero-left__caption" href="mailto:liuzixuitalia@163.com">How can i help ?</a>
        <div class="hero-left__desc">
          I’m an award winning product designer specialized in financial products. I work for Fintech, Banking, Crypto &amp; Web3
        </div>
        
      </div>

      <div ref="face" class="hero-face"></div>

      <div class="hero-right">
        <div ref="arrow" class="hero-arrow">↘</div>
        <div class="hero-right__intro">Hi, there! this is</div>
        <div ref="copy" class="hero-copy">Aurelio Liu</div>
        <div class="hero-right__desc">
          AI and robotics enthusiast building intelligent systems for tomorrow.
        </div>
      </div>
            <div class="marquee">
        <div ref="marqueeTrack" class="marquee-track">
          <span>— Liu ZiXU — Aurelio Liu — Liu ZiXU — Aurelio Liu </span>
          <span>— Liu ZiXU — Aurelio Liu — Liu ZiXU — Aurelio Liu </span>
        </div>
      </div>
    </div>
  </section>

  <div class="project">
    <div class="project-n">
      <WhocubeCom :Wid="w1" :Url="url1" :Link="link1" />
      <WhocubeCom :Wid="w2" :Url="url2" :Link="link2" />
      <WhocubeCom :Wid="w3" :Url="url3" :Link="link3" />
      <WhocubeCom :Wid="w4" :Url="url4" :Link="link4" />
      <WhocubeCom :Wid="w5" :Url="url5" :Link="link5" />
      <WhocubeCom :Wid="w6" :Url="url6" :Link="link6" />
      <WhocubeCom :Wid="w7" :Url="url7" :Link="link7" />
    </div>
  </div>

  <section class="brands">
    <div class="brands__title">I worked with</div>
    <div class="brands__viewport">
      <div ref="brandTrack" class="brands__track">
        <div v-for="(logo, index) in brandLoop" :key="`${logo.src}-${index}`" class="brands__item">
          <img :src="logo.src" :alt="logo.alt" />
        </div>
      </div>
    </div>
  </section>

  <div id="tedian">
    <WhoCom :Title="T1" :Text="t1" />
    <WhoCom :Title="T2" :Text="t2" />
    <WhoCom :Title="T3" :Text="t3" />
    <WhoCom :Title="T4" :Text="t4" />
  </div>

  <div class="project2">
    <div class="name">
      <div id="left">
        <div class="t1">刘子煦</div>
        <div class="t6">/ Liu Zixu</div>
        <div class="t2">17621616651</div>
        <div class="t2">liuziixuitalia@163.com</div>
        <div class="t5" v-on:click="dowm()"><a>下载简历</a></div>
      </div>
      <div id="right">
        <div class="t4"><a target="_blank" href="https://beian.miit.gov.cn">苏ICP备2023000172号-1</a></div>
        <div class="t4">beian.miit.gov.cn</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { gsap } from 'gsap'
import WhoCom from '../components/whoCom.vue'
import WhocubeCom from '../components/whocubeCom.vue'
import { asset } from '../utils/asset.js'

export default {
  name: 'whoView',
  mounted() {
    this.animation = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.from(this.$refs.face, { y: 18, scale: 0.99, duration: 0.28 })
        .from(this.$refs.copy, { y: 10, duration: 0.18 }, '-=0.12')
        .from(this.$refs.arrow, { y: 8, duration: 0.14 }, '-=0.08')
        .fromTo(this.$refs.marqueeTrack, { xPercent: 0 }, { xPercent: -50, duration: 10, repeat: -1, ease: 'none' }, '-=0.02')
        .from(this.$refs.brandTrack, { x: 24, opacity: 0, duration: 0.28 }, '-=0.04')
        .from('.project-n .cube', { y: 14, stagger: 0.04, duration: 0.18 }, '-=0.02')
        .from('#tedian > *', { y: 12, stagger: 0.05, duration: 0.18 }, '-=0.03')
    }, this.$el)
  },
  beforeUnmount() {
    if (this.animation) this.animation.revert()
  },
  data() {
    return {
      cv: asset('/src/assets/who/cv.png'),
      w1: '290px', url1: asset('/src/assets/who/p1.png'), link1: '/home/who',
      w2: '580px', url2: asset('/src/assets/who/p2.png'), link2: '/home/project/ZHIHU',
      w3: '435px', url3: asset('/src/assets/who/p3.png'), link3: '/home/project/plantlight',
      w4: '435px', url4: asset('/src/assets/who/p4.png'), link4: '/home/project/test',
      w5: '580px', url5: asset('/src/assets/who/p5.png'), link5: '/home/project/infor',
      w6: '290px', url6: asset('/src/assets/who/p6.png'), link6: '/home/project/christie',
      w7: '894px', url7: asset('/src/assets/who/p7.png'), link7: '/home/project/data',
      T1: 'Design',
      t1: ['企业级设计系统方法', '数据驱动的增长设计实践', '深度理解SAP、Salesforce、Google等设计体系'],
      T2: 'Code',
      t2: ['基础技术：HTML、CSS、JS、TS', '工程：jQuery、Vue、React、小程序', '图形：threejs、echart、webGPU、各类ui库'],
      T3: 'Honor',
      t3: ['2020年中国产品设计大赛优秀奖', '即时设计联合优秀插件开发者', '意大利-本科-全额奖学金'],
      T4: 'Interest',
      t4: ['Design: 交互、用户体验、设计策略', 'Pro: 工程化、图形化、Code', 'Characteristics: 探索、创新、逻辑'],
    }
  },
  methods: {
    dowm() {
      window.onload = function () {
        document.getElementById('left').focus()
      }
      const sWord = prompt('输入正确密码才能下载!')
      if (sWord == 'liuzixu') {
        window.open(this.cv)
      }
      if (sWord !== 'liuzixu') {
        alert('取消下载')
      }
    },
  },
  components: { WhoCom, WhocubeCom },
}
</script>

<style scoped>
#who {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #000;
}

.hero,
.project,
.project2 {
  width: 100%;
}

.hero-main {
  position: relative;
  width: 100%;
  
  height: 764px;
  background: #000;
  overflow: hidden;
}

.hero-face {
  position: absolute;
  left: 46%;
  bottom: 0;
  z-index: 2;
  width: min(34vw, 450px);
  height: min(72vw, 750px);
  transform: translateX(-50%);
  background-image: url('../assets/aurelio.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

.hero-left {
  position: absolute;
  left: 8%;
  top: 30%;
  z-index: 3;
  width: min(28vw, 280px);
  color: rgba(255, 255, 255, 0.76);
}

.hero-left__line {
  width: 100%;
  height: 1px;
  margin-bottom: 18px;
  background: rgba(255, 255, 255, 0.14);
}

.hero-left__line--bottom {
  margin: 18px 0;
}

.hero-left__group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  line-height: 1.35;
  font-weight: 200;
}

.hero-left__item {
  color: rgba(255, 255, 255, 0.42);
}

.hero-left__caption {
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
}

.hero-left__caption:hover {
  text-decoration: underline;
}

.hero-left__desc {
  position: absolute;
  left: 0;
  top: 170%;
  width: min(22vw, 280px);
  color: rgba(255, 255, 255, 0.38);
  font-size: 14px;
  font-weight: 200;
  line-height: 1.25;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  padding-bottom: 18px;
}

.hero-right {
  position: absolute;
  right: 6%;
  top: 27%;
  z-index: 3;
  width: min(28vw, 320px);
  color: #fff;
  text-align: left;
}

.hero-right__intro {
  margin-top: 110px;
  color: rgba(255, 255, 255, 0.42);
  font-size: 15px;
  line-height: 1.4;
}

.hero-copy {
  margin-top: 12px;
  color: #fff;
  font-size: clamp(30px, 3vw, 44px);
  font-weight: 400;
  line-height: 1.1;
}

.hero-right__desc {
  margin-top: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 18px;
  color: rgba(255, 255, 255, 0.42);
  font-size: 14px;
  font-weight: 200;
  line-height: 1.3;
}

.hero-arrow {
  position: absolute;
  z-index: 3;
  color: rgba(255, 255, 255, 0.75);
  font-size: 30px;
  font-weight: 100;
}

.marquee {
  position: absolute;
  right: 0;
  bottom: 24px;
  left: 0;
  z-index: 4;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}

.marquee-track {
  display: flex;
  width: max-content;
  padding: 16px 0;
  color: rgb(255, 255, 255);
  font-size: clamp(54px, 8vw, 96px);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.marquee-track span {
  padding-right: 56px;
}

.project {
  background-image: url('../assets/who/bg.jpg');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}

.project-n {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  padding: 64px 0;
}

.project2 {
  margin: 48px 0 0;
  padding: 48px 0;
  background: #1a1a1a;
}

.name {
  display: flex;
  width: min(894px, calc(100% - 32px));
  min-height: 280px;
  margin: auto;
  border-radius: 8px;
  background: #000;
}

.name:hover {
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.1);
}

.name > #left {
  width: 50%;
}

.name > #right {
  width: 500px;
}

.t1 {
  position: relative;
  top: 50px;
  right: -60px;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.9);
}

.t2 {
  position: relative;
  top: 48px;
  right: -60px;
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.4);
}

.t3 {
  position: relative;
  width: 150px;
  height: 150px;
  background-size: 150px 150px;
}

.a {
  top: 24px;
  right: -70px;
  background-image: url('../assets/who/wc.png');
}

.b {
  top: -126px;
  right: -270px;
  background-image: url('../assets/who/wc2.png');
}

.t4 {
  position: relative;
  top: 105px;
  left: 130px;
  display: inline-block;
  margin-right: 167px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.4);
}

:hover.t4 {
  color: rgba(255, 255, 255, 0.7);
}

.t5 {
  position: relative;
  top: 70px;
  right: -60px;
  width: 100px;
  height: 40px;
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
}

.t5:hover {
  color: rgba(0, 0, 0, 0.9);
  background-color: #fff;
}

.t6 {
  position: relative;
  top: 28px;
  right: -160px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
}

#tedian {
  display: flex;
  max-width: 1000px;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.divline {
  width: 1px;
  height: 10rem;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.15);
}

.tedian4 {
  margin: 0 32px;
}

#erweima {
  width: 150px;
  height: 150px;
  background-image: url('../assets/who/wc.png');
  background-size: 150px 150px;
}
</style>