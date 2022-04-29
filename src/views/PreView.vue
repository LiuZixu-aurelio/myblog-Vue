/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
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
  name: 'PreView',
  components: {},
  methods: {
    homee: () => { window.location.assign('./#/home') }
  }
}
</script>
