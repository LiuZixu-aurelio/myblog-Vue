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
import { getCurrentScope } from '@vue/reactivity';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("pre").appendChild(renderer.domElement);
console.log(document.getElementById("pre") )

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
export default {
  name: 'PreView',
  components: {},
  methods: {
    homee: () => { window.location.assign('./#/home') }
  }
}

</script>

<style scoped>
</style>
