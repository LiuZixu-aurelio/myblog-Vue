<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>{{na}}</h2>
            <div>
                <img v-for="item in im" :src='item' v-bind:key='item.id' width="1000">              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailCom',
    props: {
    na: String,
    im: Array
  }
  this.$destroy()
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  margin: auto;
}


</style>
