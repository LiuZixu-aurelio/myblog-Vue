/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
<template>
    <div id="pre">
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello，刘</p>
            <button id="start" v-on:click="homee()">Start</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'testQ',
  components: {},
  methods: {
    homee: () => { window.location.assign('./#/testQ') }
  }
}
</script>
