<template>
    <div class='project1'>
        <div class="whocont">
            <h2>作品</h2>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
            <CardCom :na='atest' :ur='btest' :lnk='ctest'></CardCom>
            <CardCom :na='ainfor' :ur='binfor' :lnk='cinfor'></CardCom>
        </div>
    </div>
</template>

<script>
    import CardCom from '../components/cardCom.vue'
    import {scard1, scard2, scard4} from '../pages/zhihu.js'
    import {extest1, extest2, extest4} from '../pages/testhub.js'
    import {scardInfor1, scardInfor2, scardInfor4} from '../pages/infor.js'


    export default {
        name: 'ProjectView',
        data:()=>{
            return{
                a:scard1,b:scard2,c:scard4,
                atest:extest1,btest:extest2,ctest:extest4,
                ainfor:scardInfor1,binfor:scardInfor2,cinfor:scardInfor4
                }
        },
        components: {
            CardCom
        }
    }
</script>

<style lang="scss">

.project1 {
    background-color: rgb(244, 246, 255);
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 80px;
    
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
.whoheigt{
    /* height:94vh; */


  }
</style>
