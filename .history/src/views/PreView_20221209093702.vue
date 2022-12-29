
<template>
<div >
    <div id="pre" class="your-element-selector" ref='vantaRef'>
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello, I'm Liu Zixu</p>
            <router-link to="/home/who">
              <button class="start transition transform hover:scale-90">Start</button>
            </router-link>

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

作者：用户7502991023854
链接：https://juejin.cn/post/7098207374338457637
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

</script>

<style scoped lang="scss">
img {
    margin: auto;
    position: relative
}

</style>