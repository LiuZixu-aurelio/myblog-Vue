<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>杂谈</h2>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1, scard2, scard4} from '../pages/zhihu.js'
import {scard1t, scard2t, scard4t} from '../pages/talk-ux.js'

export default {
    name: 'TalkView',
    data:()=>{
    return{
        a:scard1,b:scard2,c:scard4,
        at:scard1t,bt:scard2t,ct:scard4t,
        }
    },
  components: { CardCom}
}
</script>
