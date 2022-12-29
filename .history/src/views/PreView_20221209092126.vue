
<template>
    <div id="pre" class="your-element-selector">
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello, I'm Liu Zixu</p>
            <router-link to="/home/who">
              <button class="start transition transform hover:scale-90">Start</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import '../tools/three.min.js'
import '../tools/vanta.topology.min.js'
VANTA.TOPOLOGY({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})
</script>

<style scoped lang="scss">
img {
    margin: auto;
    position: relative
}

</style>