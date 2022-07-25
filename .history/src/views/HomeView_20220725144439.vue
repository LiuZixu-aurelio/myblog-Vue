<template>
  <div class="home">
        <img src="../../public/Frame9.png" alt="" />
        <div class="nav">
            <router-link to="/" class="navkuaiu">
              <img src="../assets/smal-logo.png">
            </router-link>
            <router-link to="/home/who" class="navkuaiu">我是谁</router-link>
            <router-link to="/home/project" class="navkuaiu">作品</router-link>
            <router-link to="/home/talk" class="navkuaiu" v-if="'/home/talk'!=undefined">杂谈</router-link>
            <router-link to="/home/sign" class="navkuaiu">笔记</router-link>
            <a href="https://liuzixu-aurelio.github.io/designcollection/" class="navkuaiu" target="_blank">资料</a>
        </div>
        <router-view></router-view>
      <div></div>
  </div>
</template>

<script>
window.onmousemove = function (e) {
       // e是事件对象
       console.log(document.querySelector('img').style.left)
       document.querySelector('img').style.left = e.pageX + 'px'
       document.querySelector('img').style.top = e.pageY + 'px'
     }
export default {
  name: 'HomeView',
  components: {}
}
</script>
