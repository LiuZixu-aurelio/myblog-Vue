<template>
  <div class="cube" v-bind:style="{width:Wid}">
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  name: 'WhocubeCom',
    props: {
    Url: String,
    Wid: String,
  },
  data:()=>{
    return{
      url:require('../assets/who/c1.png')
    }
  },
  watch: {
    Url: function(Url){
      this.url = require(Url);  //newVal即是chartData
      console.log(this.url)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cube{
  background-color: #ff0000;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  height: 300px;
}
</style>
