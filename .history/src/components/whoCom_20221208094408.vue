<template>
  <div class="kuai">
    <div class="T">{{Title}}</div>
    
  </div>
</template>

<script>
export default {
  name: 'WhoCom',
    props: {
    Title: String,
    Text: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kuai{
  background-color: #000000;
  border-radius: 8px;
  text-align: left;
  position: relative;
  height: 50px;
  line-height: 50px;
  top: 82.08%;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 435px;
  height: 210px;
}

.T{
  color: rgba(255,255,255, 0.9);
}



</style>
