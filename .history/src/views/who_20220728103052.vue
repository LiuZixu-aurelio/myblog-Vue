<template>
  <div class="whoheigt color3">
    <div class="whocont">
      <div class="whodiv">
        <h2>我是谁？</h2>
        <div class="text">
          Hello，我是刘子煦，
          <br />
          一名base在上海的设计师
          <br />
          从 to c 到 to b 物联网行业
          <br />
          擅长UI交互逻辑、产品逻辑、视觉效果实现的探索
          <div>
            <button class="start2" @click="chufa">我的能力</button>
            <button class="start2" @click="rongyu">我的荣誉</button>
            <button class="start2" @click="chenguo">我的成果</button>
          </div>
          <div class="text2" v-bind:style="{ display: state1 }">
            <div class="title0">我的能力</div>
            <div class="title1">设计工具</div>
            figma, sketch, AE, AI, PS, PR, Blender, rhino
            <div class="title1">技术栈</div>
            html, css, javaScripe, TypeScripe, jQuery, Vue, React, 小程序
            <div class="title1">视觉效果</div>
            elementUI, Antd, Bootstrap, threejs, EChart, p5js, unity(c#)
            <div class="title1">其他工具</div>
            git, nodeJs, MockJs, webGUP
          </div>
          <div class="text2" v-bind:style="{ display: state2 }">
            <div class="title0">我的荣誉</div>
            <div class="title1">产品设计大赛一等奖</div>
            2020年获得知群x知乎举办的产品设计大赛，300+个团队中获得前三
            <div class="title1">开发插件</div>
            为figma、即时设计等设计工具，开发数十个插件，拥有万名使用者
          </div>
            <div class="text2" v-bind:style="{ display: state3 }">
            <div class="title0">我的成果</div>
            <div class="title1">后台系统</div>
            物联网行业中多种海量设备控制、设备管理，设备监控。
            不同设备类控制、管理有着不一样使用场景
            <div class="title1">智能控制</div>
            智能家具、智能民用、智能大型海量设备等控制系统，使用场景有远程控制、实物带屏的直接控制
            <div class="title1">可视化大屏</div>
            道路流量监控、全球多种设备管理、自然环境监控
          </div>
        </div>
      </div>
      <!-- <div class="whodiv">
                <img src='../assets/img1.png' alt='200px'>
            </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'whoView',
  components: {},
  methods: {
    chufa() {
      if (this.state1 === 'inline') {
        this.state1 = 'none';
      } else {
        this.state2 = 'none';
        this.state3 = 'none';
        this.state1 = 'inline'
      }
    },
    rongyu() {
      if (this.state2 === 'inline') {
        this.state2 = 'none';
      } else {
        this.state1 = 'none';
        this.state3 = 'none';
        this.state2 = 'inline'
      }
    },
    chenguo() {
      if (this.state3 === 'inline') {
        this.state3 = 'none';
      } else {
        this.state1 = 'none';
        this.state2 = 'none'
        this.state3 = 'inline'
      }
    }
  },
  data() {
    return {
      state1: 'none',
      state2: 'none',
      state3: 'none',
    }
  },
}
</script>

<style>
.color3 {
 background-color: linear-gradient(109.17deg, #181818 8.55%, #000000 96.12%);
}
.text {
  line-height: 32px;
}

.title0 {
  color: rgba(255, 255, 255, 0.75);
  font-size: 20px;
}

.text2 {
  margin-top: 32px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 14px;
}

.title1 {
  margin: 16px 0px 0px 0px;
  padding: 0px;
  color: rgba(255, 255, 255, 0.5);
}

.start2 {
  display: inline-block;
  right: 64px;
  width: 90px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  background: none;
  font-size: 16px;
  margin: 16px 0px 16px 56px;
  position: relative;
}

.start2:hover {
  color: rgb(0, 0, 0);
  background: white;
}
.start2:active {
  color: rgb(0, 0, 0);
  background: white;
}
</style>
