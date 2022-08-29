<template>
<div id="who">
  <div class="title">
    Hello，我是刘子煦
    <div>在上海的设计师to b 物联网行业设计师</div>
  </div>
  <div id="character">
    <div>
      <div id="a1"></div>
      <p>深度</p>
    </div>
    <div id="b1"></div>
    <div id="c1"></div>
  </div>
  <div class="project">
    <div>
      <div id="a2"></div>
      <div id="b2"></div>
    </div>
    <div>
      <div id="a3"></div>
      <div id="b3"></div>
    </div>
    <div>
      <div id="a4"></div>
      <div id="b4"></div>
    </div>
  </div>
  <div id="tedian">
    <div class="title">与众不同</div>
    <div id="tedian2">
      <div class="tedian3">
        <div>左手设计</div>
        <ul>1.asdasd</ul>
        <ul>2.asdasd</ul>
        <ul>3.asdasd</ul>
      </div>
      <div class="tedian3">
        <div>右手技术</div>
        <ul>1.asdasd</ul>
        <ul>2.asdasd</ul>
        <ul>3.asdasd</ul>
      </div>
    </div>
  </div>
  <div class="project">
    <div class="title">联系方式</div>
    <div id="tedian2">
      <div class="tedian3">
        <div>email：liuzixuitalia@163.com</div>
        <div>email：liuzixuitalia@163.com</div>
        <div>email：liuzixuitalia@163.com</div>
      </div>
      <div class="tedian3">
        <div id="erweima"></div>
      </div>
    </div>
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
.title {
  display: block;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 48px 0px 0px 0px;
  font-size: 24px;
  flex-wrap: wrap

}
.title>div{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

#character {
  display: flex;
  margin: 48px 0px;
}

#character>div {
  background-color: #fff;
  width: 280px;
  height: 280px;
  margin: 0px 12px;
}
#character>div>p {
  color: #fff;
  justify-content: center;
}
#a1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c1.png');
  background-size: 300px 300px;
}

.project {
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0px;
  margin: 48px 0px;
}

.project>div {
  height: auto;
  margin: 24px 0px;
  display: flex;
  justify-content: center;
}

#a2 {
  background-color: #fff;
  width: 500px;
  height: 240px;
}
#b2 {
  margin-left: 24px;
  background-color: #fff;
  width: 250px;
  height: 240px;
}
#a3 {
  background-color: #fff;
  width: 375px;
  height: 240px;
}
#b3 {
  margin-left: 24px;
  background-color: #fff;
  width: 375px;
  height: 240px;
}
#a4 {
  background-color: #fff;
  width: 250px;
  height: 240px;
}
#b4 {
  margin-left: 24px;
  background-color: #fff;
  width: 500px;
  height: 240px;
}

#tedian {
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center
}
#tedian2 {
  display: flex;
  margin-top: 48px;
}
.tedian3 {
  /* border: 1px solid red; */
  width: 380px;
  margin: 24px 12px;
}
.tedian3>div {
  color: #fff;
  font-size: 16px;
  margin-top: 16px;
}
.tedian3>ul {
  color: rgba(255, 255, 255, 0.5);
  padding: 0px;
}

#erweima {
  width: 100px;
  height: 100px;
  background-image: url('../assets/who/wc.png');
  background-size: 100px 100px
}
</style>
