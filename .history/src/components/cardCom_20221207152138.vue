<template>
  <router-link :to='lnk'>
    <div id='prodiv' :style="[ur]">
        <!-- <div>{{na}}</div> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardCom',
    props: {
    na: String,
    ur: Object,
    lnk: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#prodiv {
  background-size: 100% 100%;
  border-radius: 8px;
  height: 279px;
  width: 496px;
  display: inline-block;
  margin: 24px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));

  div{
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    text-align: left;
    position: relative;
    height: 50px;
    line-height: 50px;
    top: 82.08%;
    padding: 0px 16px;
    color: rgba(0, 0, 0, 0.9);
  }
}

#prodiv:hover{
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.2));
}

</style>
