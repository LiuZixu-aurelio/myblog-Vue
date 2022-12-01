<template>
    <div class='whoheigt'>
        <div class="whocont">
            <h2>作品</h2>
            <CardCom :na='scard1' :ur='scard2' :lnk='scard4'></CardCom>
            <CardCom :na='extest1' :ur='extest2' :lnk='extest4'></CardCom>
            <CardCom :na='scardInfor1' :ur='scardInfor2' :lnk='scardInfor4'></CardCom>
            <CardCom :na='pPlant1' :ur='pPlant2' :lnk='pPlant4'></CardCom>
            <CardCom :na='pConfig1' :ur='pConfig2' :lnk='pConfig4'></CardCom>
            <CardCom :na='pConfig1' :ur='pConfig2' :lnk='pConfig4'></CardCom>
        </div>
    </div>
</template>

<script>
    import CardCom from '../components/cardCom.vue'
    import {scard1, scard2, scard4} from '../pages/zhihu.js'
    import {extest1, extest2, extest4} from '../pages/testhub.js'
    import {scardInfor1, scardInfor2, scardInfor4} from '../pages/infor.js'
    import {pPlant1, pPlant2, pPlant4} from '../pages/project-plant.js'
    import {pConfig1, pConfig2, pConfig4} from '../pages/project-config.js'




    export default {
        name: 'ProjectView',
        data:()=>{
            return{
                scard1,scard2,scard4,
                extest1,extest2,extest4,
                scardInfor1,scardInfor2,scardInfor4,
                pPlant1,pPlant2,pPlant4,
                pConfig1,pConfig2,pConfig4,
                }
        },
        components: {
            CardCom
        }
    }
</script>

<style lang="scss">

</style>
