<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>作品</h2>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='atest' :ur='btest' :lnk='ctest'></CardCom>
            <CardCom :na='atest' :ur='btest' :lnk='ctest'></CardCom>
        </div>
    </div>
</template>

<script>
    import CardCom from '../components/cardCom.vue'
    import {scard1, scard2, scard4} from '../pages/zhihu.js'
    import {scard1t, scard2t, scard4t} from '../pages/zhihu2.js'
    import {extest1, extest2, extest4} from '../pages/testhub.js'


    export default {
        name: 'ProjectView',
        data:()=>{
            return{
                a:scard1,b:scard2,c:scard4,
                at:scard1t,bt:scard2t,ct:scard4t,
                atest:extest1,btest:extest2,ctest:extest4
                }
        },
        components: {
            CardCom
        }
    }
</script>