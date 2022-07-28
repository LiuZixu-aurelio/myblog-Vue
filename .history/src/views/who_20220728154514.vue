<template>
  <div class="whoheigt color3" >
    <div class="whocont">
      <div class="whodiv" id="pre1">
        <h2>Hello，我是刘子煦</h2>
        <div class="text">
          <br />
          一名base在上海的设计师
          <br />
          从 to c 到 to b 物联网行业
          <br />
          擅长UI交互逻辑、产品逻辑、视觉效果实现的探索
          <div>
            <button class="start2" @click="chufa">我的能力</button>
            <button class="start2" @click="rongyu">我的成就</button>
            <button class="start2" @click="chenguo">我的项目</button>
            <button class="start2" @click="lianxi">联系方式</button>
          </div>
        <div class="view">
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
            <div class="title0">我的成就</div>
            <div class="title1">产品设计大赛一等奖</div>
            2020年获得知群x知乎举办的产品设计大赛，300+个团队中获得前三
            <div class="title1">开发插件</div>
            为figma、即时设计等设计工具，开发数十个插件，拥有万名使用者
          </div>
          <div class="text2" v-bind:style="{ display: state3 }">
            <div class="title0">我的项目</div>
            <div class="title1">后台系统</div>
            广告屏信息发布系统、高速提示信息系统、路灯光控制系统
            <div class="title1">智能控制</div>
            智能家居系列（APP、小程序、平板端）、农业用灯、医疗用灯
            <div class="title1">可视化大屏</div>
            交通道路监控、全球设备管理、自然环境监控
            <div class="title1">搭建设计系统</div>
            为团队搭建设计系统，并参与组件开发
          </div>
          <div class="text2" v-bind:style="{ display: state4 }">
            <div class="title0">联系方式</div>
            <div class="title1">微信：398488080</div>
            <div class="title1">邮箱：liuzixu@gmail.com</div>            
          </div>
        </div>
          
        </div>
            
        
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, 2, 0.1, 1000 );
scene.background = new THREE.Color("rgb(0, 0, 0)")

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

const loader = new GLTFLoader(); 
loader.load('shiba/scene.gltf',function( gltf ){
  scene.add( gltf.scene )
},undefined,function( error ){ console.error( error );});

camera.position.z = 3;
camera.rotation.x = -0.02
/* camera.position.y = -1; */
/* camera.position.x = -0.2; */




function animate() {
  /* console.log(window.event.clientX) */
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  /* camera.rotation.x -= 0.001 */
  /* camera.rotation.y += 0.1 */
  camera.position.z += 0.001 
  /* console.log(scene.children[0]) */
  
};

animate();


export default {
  name: "whoView",
  components: {},
  mounted(){
    document.getElementById("pre1").appendChild(renderer.domElement)
    document.getElementsByTagName('canvas')[0].attributes.style.nodeValue = "display: inline-block; width: 300px; height: 150px; position:absolute; top: 150px; left:600px;"
  },
  methods: {
    chufa() {
      if (this.state1 === "inline") {
        this.state1 = "none";
      } else {
        this.state2 = 'none';
        this.state3 = 'none';
        this.state4 = 'none';
        this.state1 = 'inline'
      }
    },
    rongyu() {
      if (this.state2 === "inline") {
        this.state2 = "none";
      } else {
        this.state1 = 'none';
        this.state3 = 'none';
        this.state4 = 'none';
        this.state2 = 'inline'
      }
    },
    chenguo() {
      if (this.state3 === "inline") {
        this.state3 = "none";
      } else {
        this.state1 = 'none';
        this.state2 = 'none'
        this.state4 = 'none';
        this.state3 = 'inline'
      }
    },
    lianxi() {
      if (this.state4 === 'inline') {
        this.state4 = 'none';
      } else {
        this.state1 = 'none';
        this.state2 = 'none'
        this.state3 = 'none';
        this.state4 = 'inline'
      }
    }
  },
  data() {
    return {
      state1: 'inline',
      state2: 'none',
      state3: 'none',
      state4: 'none',
    }
  },
};
</script>

<style>
.color3 {
  background: #000000 ;
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
.view {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
}

.title1 {
  margin: 16px 0px 0px 0px;
  padding: 0px;
  color: rgba(255, 255, 255, 0.5);
}

.start2 {
  display: inline-block;
  right: 56px;
  width: 90px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.5);
  background: none;
  font-size: 16px;
  margin: 32px 0px 32px 56px;
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
