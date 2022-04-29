<template>
  <router-view></router-view>
</template>

<style lang="scss">

body{
  padding: 0px;
  margin: 0px;
  height: auto;
}

#app{
  height: auto;
}

#pre {
  background-color: #000000;
  height: 100vh;

  .liuzixu{
    color: aliceblue;
    padding: 24px;
  }

  .cont{
    color: aliceblue;
    width: 90%;
    text-align: center;
    position: relative;
    top: 100px;
  }
  #start{
    width: 74px;
    height: 36px;
    border-radius: 18px;
    border: 1px solid white;
    color: white;
    background: none;
    font-size: 16px;
    margin: 16px 56px;
    position:static;
  }

  #start:hover{
    color: rgb(0,0,0 );
    background: white;
  }
}

.home{
  background-color: rgb(244, 246, 255);
  height: auto;

  .nav {
      background-color: black;
      height: 67px;
      line-height: 67px;
    img {
      margin: 0px 24px;
      position: relative;
      top: 4px;
    }

    .navkuaiu{
      margin: 0px 24px;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
    }
    .navkuaiu:hover{
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
  }
  .color1{
    background-color: #000
  }

  .color2{
    background-color: rgb(244, 246, 255)
  }

  .whoheigt{height:auto;

    .whocont{
      width: 92%;
      margin: auto;
      height: auto;
      text-align: center;
    }

    .whodiv{
      display: inline-block;
      margin: 24px 24px 0px 24px;
      padding-bottom: 320px ;
      max-width: 30%;
      text-align: left;
      color: rgba(255, 255, 255, 0.75)
    }

    img{
      margin: 0px 24px;
      position: relative;
      top: 32px;
    }
  }
}

</style>
