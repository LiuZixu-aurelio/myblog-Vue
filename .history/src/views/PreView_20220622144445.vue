/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
<template>
    <div id="pre">
        <div class="liuzixu">design by LiuZixu</div>
        <div class="cont">
            <img src="../assets/logo.png">
            <p class="zi">Hello，我是刘子煦</p>
            <router-link to="/home/who">
              <button id="start">Start</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

/* const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: "rgb(20,20,20)" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube ); */

const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

const loader = new GLTFLoader(); 
loader.load('blackhole/scene.gltf',function( gltf ){
  scene.add( gltf.scene )
},undefined,function( error ){ console.error( error );});

camera.position.z = 2;
camera.position.y = -2;
camera.position.x = 0.25;


function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  camera.rotation.x += 0.001
  camera.position.z -= 0.001
};

animate();
export default {
  name: 'PreView',
  components: {},
  methods: {
    homee: () => { window.location.assign('./#/home') }
  },
  mounted(){
  document.getElementById("pre").appendChild(renderer.domElement);
  const root = document.getElementsByTagName("canvas")
  root[0].attributes.style.nodeValue = "display: block; width: auto; height: 800px; position:absolute; top: 0px;"
  console.log(document.getElementsByTagName("canvas"))
  console.log(renderer.domElement)

  }
}

</script>

<style scoped>
</style>
