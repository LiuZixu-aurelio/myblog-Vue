<template>
    <div class='whoheigt color2'>
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