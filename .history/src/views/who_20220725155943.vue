<template>
  <div class="whoheigt color1">
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
            <button class="start2" @click="chenguo">我的成果</button>
          </div>
          <div class="text2" v-bind:style="{ display: state1 }">
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
            <div class="title1">插件</div>
            figma, sketch, AE, AI, PS, PR, Blender, rhino
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
        this.state1 = 'inline'
        console.log(this.state1)
      }
    },
    chenguo() {
      if (this.state2 === 'inline') {
        this.state2 = 'none';
      } else {
        this.state1 = 'none';
        this.state2 = 'inline'
        console.log(this.state2)
      }
    }
  },
  data() {
    return {
      state1: 'none',
      state2: 'none'
    }
  },
}
</script>

<style>
.text {
  line-height: 32px;
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
  margin: 16px 56px;
  position: relative;
}

#start2:hover {
  color: rgb(0, 0, 0);
  background: white;
}
</style>
