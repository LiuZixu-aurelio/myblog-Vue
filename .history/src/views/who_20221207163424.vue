<template>
<div id="who">
  <div class="title">
    Hello，我是刘子煦
    <div>在上海, to b 物联网行业的设计师</div>
  </div>
  <div id="character">
    <div>
      <div id="a1" class="transition hover:-translate-y-2"></div>
      <p>深度</p>
    </div>
    <div>
      <div id="b1" class="transition hover:-translate-y-2"></div>
      <p>创新</p>
    </div>
    <div>
      <div id="c1" class="transition hover:-translate-y-2"></div>
      <p>效率</p>
    </div>
  </div>
  <div class="project">
    <div>
      <a href="https://www.figma.com/@liuzixu" target="_blank">
        <div id="a2"></div>
      </a>
      <router-link :to='"/home/project/ZHIHU"'>
        <div id="b2"></div>
      </router-link>
    </div>
    <div>
      <router-link :to='"/home/project/plantlight"'>
        <div id="a3"></div>
      </router-link>
      <div id="b3"></div>
    </div>
    <div>
      <router-link :to='"/home/project/test"'>
        <div id="a4"></div>
      </router-link>
      <div id="b4"></div>
    </div>
    <div>
      <router-link :to='"/home/project/data"'>
        <div id="a5"></div>
      </router-link>
    </div>
  </div>
  <div id="tedian">
    <div class="title2">与众不同</div>
    <div id="tedian2">
      <div class="tedian4">
        <div>左手设计</div>
        <ul>企业级设计系统方法</ul>
        <ul>数据驱动的增长设计实践</ul>
        <ul>深度理解SAP、Salesforce、Google等设计体系</ul>
      </div>
      <div class="divline"></div>
      <div class="tedian3">
        <div>右手技术</div>
        <ul>基础技术：HTML、CSS、JS、TS</ul>
        <ul>工程：jQuery、Vue、React、小程序</ul>
        <ul>图形：threejs、echart、webGPU、各类ui库</ul>
      </div>
    </div>
  </div>
  <div class="project2">
    <div class="title2">联系方式</div>
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
  flex-direction: column;
}
.title {
  display: block;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 120px 0px 0px 0px;
  font-size: 24px;
  flex-wrap: wrap
}
.title>div{
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.title2 {
  display: block;
  color: aliceblue;
  justify-content: center;
  align-items: center;
  margin: 48px 0px 0px 0px;
  font-size: 24px;
  flex-wrap: wrap
}



#character {
  display: flex;
  margin: 60px 0px;
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

#a1{
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c1.png');
  background-size: 300px 300px;
}
#a1:hover {
  background-image: url('../assets/who/c1h.png');
}


#b1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c2.png');
  background-size: 300px 300px;
  border-radius: 4px;
}
#b1:hover {
  background-image: url('../assets/who/c2h.png');
}
#c1 {
  width: 280px;
  height: 280px;
  background-image: url('../assets/who/c3.png');
  background-size: 300px 300px;
  border-radius: 4px;
}
#c1:hover {
  background-image: url('../assets/who/c3h.png');
}

.project {
  background-image: url('../assets/who/bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  /* background-color: rgb(26, 26, 26); */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 0px 48px 0px;
  margin: 48px 0px;
}

.project2 {
  background-color: rgb(26, 26, 26);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0px;
  margin: 48px 0px;
}

.project>div{
  height: auto;
  margin: 12px 0px;
  display: flex;
  justify-content: center;
}

.project2>div{
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
