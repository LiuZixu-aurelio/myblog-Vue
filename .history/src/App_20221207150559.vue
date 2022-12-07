<template>
  <div>
    <!-- <img id='cursor' src="../public/Frame9.png" alt="" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>


<style lang="scss">
* {
    cursor:url('../public/Frame9.svg'), auto;;
  }

body{
  padding: 0px;
  margin: 0px;
  height: auto;
}
.hairlines{
  padding: 0px;
  margin: 0px;
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
    width: 100%;
    text-align: center;
    position: relative;
    top: 100px;
    z-index: 1;
  }

  .test {
  color:rgba(255, 255, 255, 0.5);
  z-index: 1;
  text-align: center;
  position: relative;
  bottom: -150px;
  width: auto;
  height: auto;
  cursor: default;
  font-size: 12px;
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
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(12px);
      height: 67px;
      line-height: 4px;
      position: fixed;
      width: 100%;
      z-index: 1;
      
    a {
      display: inline-block;
    }
    img {
      margin: 0px 24px;
      position: relative;
      top: 4px;
    }

    .navkuaiu{
      margin: 8px 24px;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      &.router-link-exact-active{
       color: rgba(255, 255, 255, 0.9);
    }
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

  .whoheigt{
        background-color: rgb(244, 246, 255);
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 100px;

    .whocont{
      width: 92%;
      margin: auto;
      height: 90%;
      text-align: center;
    }

    .whodiv{
      display: inline-block;
      margin: 24px 24px 0px 24px;
      padding-bottom: 0px ;
      max-width: 80%;
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
