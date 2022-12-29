<template>
  <div class="cube transition transform hover:scale-98">
    <router-link :to='Link'>
      <div  v-bind:style="{width:Wid}">
        <img :src="url" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'WhocubeCom',
  props: {
    Url: String,
    Wid: String,
    Link: String
  },
  data(){
    return{
      url:this.Url
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cube{
  background-color: #000000;
  ;
  height: 300px;
  margin: 16px;
  img{
    width: 100%;
    border-radius:4px
  }
}
</style>
