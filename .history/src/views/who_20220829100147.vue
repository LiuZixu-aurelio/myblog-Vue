<template>
<div id="who">
  <div id="title">
    Hello，我是刘子煦
    <div>在上海的设计师to b 物联网行业设计师</div>
  </div>
  <div id="character">
    <div id="a1"></div>
    <div id="b1"></div>
    <div id="c1"></div>
  </div>
  <div id="project">
    <div>
      <div id="a2"></div>
      <div id="b2"></div>
    </div>
    <div></div>
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
  margin: 48px 0px 0px 0px;
  font-size: 24px;
  flex-wrap: wrap

}
#title>div{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

#character {
  display: flex;
  margin: 48px 0px;
}

#character>div {
  background-color: #fff;
  width: 240px;
  height: 240px;
  margin: 0px 24px;
}

#project {
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0px;
  margin: 48px 0px;
}

#project>div {
  border: 1px solid red;
  height: 240px;
  margin: 24px 0px;
  display: flex;
  justify-content: center;
}
#a2 {
  background-color: #fff;
  width: 520px;
  height: 240px;
}
#b2 {
  margin: left 24px; ;
  background-color: #fff;
  width: 260px;
  height: 240px;
}

</style>
