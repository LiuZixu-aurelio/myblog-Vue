<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>笔记</h2>
            <CardCom :na='signProduct1' :ur='signProduct2' :lnk='signProduct4'></CardCom>
            <CardCom :na='signBlender1' :ur='signBlender2' :lnk='signBlender4'></CardCom>
            <CardCom :na='signSAP1' :ur='signSAP2' :lnk='signSAP4'></CardCom>
            <CardCom :na='signSalesforce1' :ur='signSalesforce2' :lnk='signSalesforce4'></CardCom>
            <CardCom :na='signSalesforce1' :ur='signSalesforce2' :lnk='signSalesforce4'></CardCom>
            <CardCom :na='signMaterialdesign1' :ur='signMaterialdesign2' :lnk='signMaterialdesign4'></CardCom>

        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {signProduct1, signProduct2, signProduct4} from '../pages/sign-product.js'
import {signBlender1, signBlender2, signBlender4} from '../pages/sign-blender.js'
import {signSAP1, signSAP2, signSAP4} from '../pages/sign-sap.js'
import {signSalesforce1, signSalesforce2, signSalesforce4} from '../pages/sign-salesforce.js'
import {signMaterialdesign1, signMaterialdesign2, signMaterialdesign4} from '../pages/sign-MaterialDesign.js'





export default {
  name: 'SignView',
  data:()=>{
    return{
        signProduct1,signProduct2,signProduct4,
        signBlender1,signBlender2,signBlender4,
        signSAP1,signSAP2,signSAP4,
        signSalesforce1,signSalesforce2,signSalesforce4,
        signMaterialdesign1, signMaterialdesign2, signMaterialdesign4

        }
    },
  components: {CardCom}
}
</script>
