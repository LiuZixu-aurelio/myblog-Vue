
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
import BIRDS from 'vanta/src/vanta.topology'
var setVanta = ()=>{
if (window.VANTA) window.VANTA.TOPOLOGY({
  el: this.$refs.vantaRef,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})
}
_strk.push(function() {
  setVanta()
  window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
})

</script>

<style scoped lang="scss">
img {
    margin: auto;
    position: relative
}

</style>