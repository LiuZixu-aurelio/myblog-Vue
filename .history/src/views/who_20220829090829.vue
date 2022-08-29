<template>
<div id="who">
  <div id="title">
    Hello，我是刘子煦
    <div>在上海的设计师to b 物联网行业设计师</div>
  </div>
  <div id="character">
    <div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
  </div>
</div>

</template>

<script>


export default {
  name: "whoView",
  components: {},
  mounted(){

  },
  methods: {
  },
  data() {
  },
};
</script>

<style>
#who {
  background-color: rgb(0, 0, 0);
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column
}
#title {
  display: block;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 48px 0px;
  font-size: 24px;
  flex-wrap: wrap

}
#title>div{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

#character {
  display: block;
  height: 400px;
  width: 500px;
}

#character>div{
  background-color: #fff;
  width: 100px;
  height: 100px;
}

</style>
