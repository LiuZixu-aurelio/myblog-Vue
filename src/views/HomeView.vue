<template>
  <div class="home">
    <nav class="nav" aria-label="Primary">
      <router-link to="/" class="navkuaiu" aria-label="Back to start page">
        <img src="@/assets/smal-logo.png" alt="myblog logo">
      </router-link>
      <router-link to="/home/who" class="navkuaiu">我是谁</router-link>
      <router-link to="/home/project" class="navkuaiu">作品</router-link>
      <router-link to="/home/talk" class="navkuaiu">思考</router-link>
      <router-link to="/home/sign" class="navkuaiu">笔记</router-link>
      <a href="https://liuzixu-aurelio.github.io/designcollection/" class="navkuaiu" target="_blank" rel="noreferrer">资料</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HomeView',
  mounted() {
    gsap.from('.nav', {
      opacity: 0,
      y: -18,
      duration: 0.6,
      ease: 'power2.out',
    })

    gsap.from('.navkuaiu', {
      opacity: 0,
      y: -10,
      stagger: 0.08,
      delay: 0.1,
      duration: 0.45,
      ease: 'power2.out',
    })
  },
}
</script>

<style scoped>
</style>
