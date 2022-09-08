<template>
<div id="who">
  <div class="title">
    Hello，我是刘子煦
    <div>在上海, to b 物联网行业的设计师</div>
  </div>
  <div id="character">
    <div>
      <div id="a1"></div>
      <p>深度</p>
    </div>
    <div>
      <div class="menban">
        <div id="b1"></div>
      </div>
      <p>创新</p>
    </div>
    <div>
      <div id="c1"></div>
      <p>效率</p>
    </div>
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
    <div>
      <div id="a5"></div>
    </div>
  </div>
  <div id="tedian">
    <div class="title">与众不同</div>
    <div id="tedian2">
      <div class="tedian4">
        <div>左手设计</div>
        <ul>1.asdasd</ul>
        <ul>2.asdasd</ul>
        <ul>3.asdasd</ul>
      </div>
      <div class="divline"></div>
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
      <div class="tedian4">
        <div>Email：liuzixuitalia@163.com</div>
        <div>Wechat：398488080</div>
        <div>phone：17621616651</div>
      </div>
      <div class="divline"></div>
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
  width: 280px;
  height: 350px;
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: center
}
#character>div>p {
  color:rgba(255, 255, 255, 0.75);
  
}
.menban {
  background-color: #fff;
  border-radius: 4px;
}
#a1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c2.png');
  background-size: 300px 300px;
  opacity:0.6
  
}
#b1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c3.png');
  background-size: 300px 300px;
  border-radius: 4px;
}
#c1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c1.png');
  background-size: 300px 300px;
  border-radius: 4px;
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
  margin: 12px 0px;
  display: flex;
  justify-content: center;
}

#a2 {
  background-image: url('../assets/who/p1.png');
  background-size: 290px 300px;
  border-radius: 4px;
  width: 290px;
  height: 300px;
}
#b2 {
  margin-left: 24px;
  background-image: url('../assets/who/p2.png');
  background-size: 580px 300px;
  border-radius: 4px;
  width: 580px;
  height: 300px;
}
#a3 {
  background-image: url('../assets/who/p3.png');
  background-size: 435px 300px;
  border-radius: 4px;
  width: 435px;
  height: 300px;
}
#b3 {
  margin-left: 24px;
  background-image: url('../assets/who/p4.png');
  background-size: 435px 300px;
  border-radius: 4px;
  width: 435px;
  height: 300px;
}
#a4 {
  background-image: url('../assets/who/p5.png');
  width: 580px;
  height: 300px;
}
#b4 {
    margin-left: 24px;
    background-image: url('../assets/who/p6.png');
  width: 290px;
  height: 300px;
}
#a5 {
    background-image: url('../assets/who/p7.png');
  width: 894px;
  height: 300px;
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
  margin: 0px 32px;
}
.tedian3>div {
  color: #fff;
  font-size: 16px;
  margin: 8px 16px 24px 16px;
}
.tedian3>ul {
  color: rgba(255, 255, 255, 0.5);
  padding: 0px;
  margin: 16px 16px;
}
.divline {
  width: 1px;
  height: 10rem;
  margin: 0px 0px;
  background-color: rgba(255, 255, 255, 0.15);
}
.tedian4 {
  /* border: 1px solid red; */
  width: 380px;
  margin: 0px 32px;
}
.tedian4>div {
  color: #fff;
  font-size: 16px;
  margin: 8px 16px 24px 16px;
  text-align: right;
}
.tedian4>ul {
  color: rgba(255, 255, 255, 0.5);
  padding: 0px;
  margin: 16px 16px;
  text-align: right;
}



#erweima {
  width: 150px;
  height: 150px;
  background-image: url('../assets/who/wc.png');
  background-size: 150px 150px
}
</style>
