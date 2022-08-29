<template>
<div id="who">
  <div id="title">
    Hello，我是刘子煦
    <div>在上海的设计师to b 物联网行业设计师</div>
  </div>
  <div id="character">

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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap
}
#title {
  display: block;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 48px 0px;
  font-size: 24px;
}
#title>div{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

#character {
  display: block;
  height: 100px;
  width: 500px;
  background-color: rgb(221, 42, 42);
}

</style>
