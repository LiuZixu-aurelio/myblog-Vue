
<template>
    <div id="pre">
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello，我是刘子煦</p>
            <router-link to="/home/who">
              <button id="start">Start</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
    document.body.appendChild(s);

    const s1 = document.createElement('script');
    s1.type = 'text/javascript';
    s1.src = 'https://cdn.jsdelivr.net /npm/vanta@latest/dist/vanta.birds.min.js';
    document.body.appendChild(s);
  }}
  var setVanta = ()=>{ if (window.VANTA)
    window.VANTA.BIRDS({ 
    el: " . s-page-1 .s-section-1 .s-section ", mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00 }) } 
    _strk.push (function() { setVanta()
    window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
    })

</script>



<style scoped lang="scss">

</style>