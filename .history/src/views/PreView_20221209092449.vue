
<template>
    <div id="pre" class="your-element-selector">
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello, I'm Liu Zixu</p>
            <router-link to="/home/who">
              <button class="start transition transform hover:scale-90">Start</button>
            </router-link>
            <div ref='vantaRef'>
                Foreground content here
            </div>
        </div>
    </div>
</template>
<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'
export default {
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}

</script>

<style scoped lang="scss">
img {
    margin: auto;
    position: relative
}

</style>