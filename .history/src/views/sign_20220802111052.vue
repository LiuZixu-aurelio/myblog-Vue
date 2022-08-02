<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>笔记</h2>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
            <CardCom :na='asp' :ur='bsp' :lnk='csp'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1, scard2, scard4} from '../pages/zhihu.js'
import {signProduct1, signProduct2, signProduct4} from '../pages/sign-product.js'
import {signBlender1, signBlender2, signBlender4} from '../pages/sign-blender.js'


export default {
  name: 'SignView',
  data:()=>{
    return{
        a:scard1,b:scard2,c:scard4,
        asp:signProduct1,bsp:signProduct2,csp:signProduct4,
        asb:signBlender1,bsb:signBlender2,csb:signBlender4,
        }
    },
  components: { CardCom}
}
</script>
