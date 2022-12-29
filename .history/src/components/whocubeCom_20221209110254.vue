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
      url:this.Url
    }
  },
  watch: {
    Url: function(a){
      this.url = require(a);  
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
