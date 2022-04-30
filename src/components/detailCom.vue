<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>{{na}}</h2>
            <div>
                <img src="../assets/zhihu.png">  
                <img v-for="item in im" :src='item'>              
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
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#qqq {
  background:url(../assets/zhihu.png);
  background-size: 100% 100%;
  height: 800px;
  width: 1080px;
  display: inline-block;
  margin: 24px;
}


</style>
