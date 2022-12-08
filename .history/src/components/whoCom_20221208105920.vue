<template>
  <div class="kuai">
    <div class="T">{{Title}}</div>
    <img src="../assets/grayicon.png" alt="" class="tramslation duration-5000 ease-in-out transform hover:rotate-1080">
    <div class="p">
      <div class="t" v-for="item in Text" :key="item.id">{{item}}</div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'WhoCom',
    props: {
    Title: String,
    Text: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kuai{
  background-color: #000000;
  border-radius: 8px;
  text-align: left;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 435px;
  height: 210px;
  margin: 16px;
  img{
    width:32px;
    position: relative;
    left: 360px;
    bottom: 38px;
  }
}

.kuai:hover {
  background: #E2EBF7;
  div{
    color: #000000
    }
}


.T{
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: rgba(255,255,255, 0.9);
}


.p{
margin-top: 32px;
}
.t{
  margin-top: 4px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255,255,255, 0.9);
}


</style>
