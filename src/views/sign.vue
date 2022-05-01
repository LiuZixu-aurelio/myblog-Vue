<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>笔记</h2>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1, scard2, scard4} from '../pages/zhihu.js'

export default {
  name: 'SignView',
  data:()=>{
    return{
        a:scard1,b:scard2,c:scard4,
        }
    },
  components: { CardCom}
}
</script>
