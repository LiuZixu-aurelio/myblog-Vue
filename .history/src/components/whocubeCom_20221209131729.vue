<template>
  <div>{{Link}}
    <router-link :to='"/home/project/ZHIHU"' class="transition transform hover:scale-98">
      <div class="cube" v-bind:style="{width:Wid}">
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
  border-radius: 8px;
  height: 300px;
  img{
    width: 100%;
  }
}
</style>
