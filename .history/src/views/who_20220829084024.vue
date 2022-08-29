<template>

</template>

<script>


export default {
  name: "whoView",
  components: {},
  mounted(){
    document.getElementById("pre1").appendChild(renderer.domElement)
    document.getElementsByTagName('canvas')[0].attributes.style.nodeValue = "display: inline-block; width: 200px; height: 200px; position:relative; top: -200px; left:-200px;"
  },
  methods: {
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
#pre1 {
height:100px;
}

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
  top: -150px;
  width: 90px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.5);
  background: none;
  font-size: 16px;
  margin: 32px 56px 32px 0px;
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
