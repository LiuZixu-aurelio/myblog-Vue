<template>
<div id="who">
  <div class="title">
    Hello，I'm Liu Zixu
    <div>Product designer / Creator, Shanghai</div>
  </div>
  <div id="character">
    <div>
      <div id="a1" class="mb-4 transition hover:-translate-y-4"></div>
      <p>深度</p>
    </div>
    <div>
      <div id="b1" class="mb-4 transition hover:-translate-y-4"></div>
      <p>创新</p>
    </div>
    <div>
      <div id="c1" class="mb-4 transition hover:-translate-y-4"></div>
      <p>效率</p>
    </div>
  </div>
  <div class="project">
    <div class="project-n">
      <WhocubeCom :Wid="w1" :Url="url1" :Link="link1"></WhocubeCom>
      <WhocubeCom :Wid="w2" :Url="url2" :Link="link2"></WhocubeCom>

      <WhocubeCom :Wid="w3" :Url="url3" :Link="link3"></WhocubeCom>
      <WhocubeCom :Wid="w4" :Url="url4" :Link="link4"></WhocubeCom>

      <WhocubeCom :Wid="w5" :Url="url5" :Link="link5"></WhocubeCom>
      <WhocubeCom :Wid="w6" :Url="url6" :Link="link6"></WhocubeCom>

      <WhocubeCom :Wid="w7" :Url="url7" :Link="link7"></WhocubeCom>
    </div>
  </div>
  <div id="tedian">
    <WhoCom :Title="T1" :Text='t1'></WhoCom>
    <WhoCom :Title="T2" :Text='t2'></WhoCom>
    <WhoCom :Title="T3" :Text='t3'></WhoCom>
    <WhoCom :Title="T4" :Text='t4'></WhoCom>
  </div>
  <div class="project2">
    <div class="name">
      <div class="t1">刘子煦</div>
      <div class="t2">17621616651</div>
      <div class="t2">17621616651</div>
      <div class="t3"></div>
    </div>
  </div>
</div>

</template>

<script>
import WhoCom from '../components/whoCom.vue'
import WhocubeCom from '../components/whocubeCom.vue'


export default {
  name: "whoView",
  data:()=>{
    return{
      w1:"290px",url1:require("../assets/who/p1.png"),link1:'/home/who',
      w2:"580px",url2:require("../assets/who/p2.png"),link2:'/home/project/ZHIHU',
      w3:"435px",url3:require("../assets/who/p3.png"),link3:'/home/project/plantlight',
      w4:"435px",url4:require("../assets/who/p4.png"),link4:'/home/who',
      w5:"580px",url5:require("../assets/who/p5.png"),link5:'/home/project/test',
      w6:"290px",url6:require("../assets/who/p6.png"),link6:'/home/who',
      w7:"894px",url7:require("../assets/who/p7.png"),link7:'/home/project/data',

      T1:"Design",
      t1:["企业级设计系统方法","数据驱动的增长设计实践","深度理解SAP、Salesforce、Google等设计体系"],
      T2:"Code",
      t2:["基础技术：HTML、CSS、JS、TS","工程：jQuery、Vue、React、小程序","图形：threejs、echart、webGPU、各类ui库"],
      T3:"Honor",
      t3:['2020年中国产品设计大赛优秀奖','即时设计联合优秀插件开发者','意大利-本科-全额奖学金'],
      T4:"Interest",
      t4:["Design: 交互、用户体验、设计策略",'Pro: 工程化、图形化、Code','Characteristics: 探索、创新、逻辑'],
    }
  },
  components: {
      WhoCom,WhocubeCom
  }
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
  margin-top: 8px;
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
  border-radius: 4px;
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
  width: 100%;
}
.project-n {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.project2 {
  background-color: rgb(26, 26, 26);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 0px;
  margin: 48px 0px;
}

.name {
  margin: auto;
  width: 442px;
  height: 201px;
  left: 511px;
  top: 3172px;
  background: #000000;
  box-shadow: 0px 0px 24px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}
.name>.t1{
  position: relative;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.9);
  top: 34px;
  right: -34px;
}
.name>.t2{
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.4);
  top: 100px;
  right: -34px;
}


#tedian {
  margin: 0px 48px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  max-width: 1000px
}
.divline {
  width: 1px;
  height: 10rem;
  margin: 0px 0px;
  background-color: rgba(255, 255, 255, 0.15);
}
.tedian4 {
  margin: 0px 32px;
}




#erweima {
  width: 150px;
  height: 150px;
  background-image: url('../assets/who/wc.png');
  background-size: 150px 150px
}
</style>
