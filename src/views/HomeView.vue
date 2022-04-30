<template>
  <div class="home">
        <div class="nav">
            <img src="../assets/smal-logo.png">
            <router-link to="/home/who" class="navkuaiu">我是谁</router-link>
            <router-link to="/home/project" class="navkuaiu">作品</router-link>
            <router-link to="/home/talk" class="navkuaiu">杂谈</router-link>
            <router-link to="/home/sign" class="navkuaiu">笔记</router-link>
            <router-link to="/" class="navkuaiu">资料</router-link>
        </div>
        <router-view></router-view>
      <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
