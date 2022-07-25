<template>
  <div class="home">
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

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>

</style>
