<template>
  <div class="home" @click="onRootClick">
    <nav ref="navRef" class="nav" aria-label="Primary">
      <router-link to="/" class="navkuaiu navkuaiu--logo" aria-label="Back to start page" @click="closeMenu">
        <img src="@/assets/smal-logo.png" alt="myblog logo">
      </router-link>

      <button
        class="menu-btn"
        type="button"
        :aria-expanded="String(menuOpen)"
        aria-controls="primary-menu"
        aria-label="切换导航菜单"
        @click.stop="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>

      <div id="primary-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
        <router-link to="/home/who" class="navkuaiu" @click="closeMenu">我是谁</router-link>
        <router-link to="/home/project" class="navkuaiu" @click="closeMenu">作品</router-link>
        <router-link to="/home/talk" class="navkuaiu" @click="closeMenu">思考</router-link>
        <router-link to="/home/lab" class="navkuaiu" @click="closeMenu">实验室</router-link>
        <a href="https://liuzixu-aurelio.github.io/designcollection/" class="navkuaiu" target="_blank" rel="noreferrer" @click="closeMenu">资料</a>
      </div>
    </nav>
    <div class="home__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HomeView',
  data() {
    return {
      menuOpen: false,
    }
  },
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
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    onRootClick(event) {
      if (!this.menuOpen || window.innerWidth > 768) return
      const navEl = this.$refs.navRef
      if (!navEl) return
      if (!navEl.contains(event.target)) {
        this.closeMenu()
      }
    },
  },
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
}

.navkuaiu--logo {
  margin-right: auto;
}

.menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border: 0;
  background: transparent;
}

.menu-btn span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 4px auto;
  background: rgba(255, 255, 255, 0.9);
}

.nav-links {
  display: flex;
  align-items: center;
}

.home__content {
  min-height: calc(100vh - 67px);
}

@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    left: 0;
    right: 0;
    top: 67px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    padding: 8px 16px 12px;
    background: rgba(0, 0, 0, 0.96);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-links.is-open {
    display: flex;
  }
}
</style>
