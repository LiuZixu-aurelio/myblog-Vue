<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>笔记</h2>
            <CardCom :na='asp' :ur='bsp' :lnk='csp'></CardCom>
            <CardCom :na='asb' :ur='bsb' :lnk='csb'></CardCom>
            <CardCom :na='asb' :ur='bsb' :lnk='csb'></CardCom>
            <CardCom :na='asalesforce' :ur='bsalesforce' :lnk='csalesforce'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {signProduct1, signProduct2, signProduct4} from '../pages/sign-product.js'
import {signBlender1, signBlender2, signBlender4} from '../pages/sign-blender.js'
import {signSAP1, signSAP2, signSAP4} from '../pages/sign-sap.js'
import {signSalesforce1, signSalesforce2, signSalesforce4} from '../pages/sign-salesforce.js'




export default {
  name: 'SignView',
  data:()=>{
    return{
        asp:signProduct1,bsp:signProduct2,csp:signProduct4,
        asb:signBlender1,bsb:signBlender2,csb:signBlender4,
        asap:signSAP1,bsap:signSAP2,csap:signSAP4,
        asalesforce:signSalesforce1,bsalesforce:signSalesforce2,csalesforce:signSalesforce4,

        }
    },
  components: {CardCom}
}
</script>
