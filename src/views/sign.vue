<template>
  <div class='whoheigt color2'>
    <div class="whocont">
      <h2>笔记</h2>
      <CardCom :na='signProduct.title' :ur='signProduct.cover' :lnk='signProduct.path'></CardCom>
      <CardCom :na='signBlender.title' :ur='signBlender.cover' :lnk='signBlender.path'></CardCom>
      <CardCom :na='signSAP.title' :ur='signSAP.cover' :lnk='signSAP.path'></CardCom>
      <CardCom :na='signSalesforce.title' :ur='signSalesforce.cover' :lnk='signSalesforce.path'></CardCom>
      <CardCom :na='signMaterialdesign.title' :ur='signMaterialdesign.cover' :lnk='signMaterialdesign.path'></CardCom>
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { signProduct } from '../pages/sign-product.js'
import { signBlender } from '../pages/sign-blender.js'
import { signSAP } from '../pages/sign-sap.js'
import { signSalesforce } from '../pages/sign-salesforce.js'
import { signMaterialdesign } from '../pages/sign-MaterialDesign.js'

export default {
  name: 'SignView',
  components: { CardCom },
  data() {
    return {
      signProduct,
      signBlender,
      signSAP,
      signSalesforce,
      signMaterialdesign,
    }
  },
}
</script>
