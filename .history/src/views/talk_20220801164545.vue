<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>杂谈</h2>
            <CardCom :na='a' :ur='b' :lnk='c'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='abutton' :ur='bbutton' :lnk='bbutton'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1, scard2, scard4} from '../pages/zhihu.js'
import {scard1t, scard2t, scard4t} from '../pages/talk-ux.js'
import {Button1, Button2, Button4} from '../pages/c-button'


export default {
    name: 'TalkView',
    data:()=>{
    return{
        a:scard1,b:scard2,c:scard4,
        at:scard1t,bt:scard2t,ct:scard4t,
        abutton:Button1,bbutton:Button2,cbutton:Button4,
        }
    },
  components: { CardCom}
}
</script>
