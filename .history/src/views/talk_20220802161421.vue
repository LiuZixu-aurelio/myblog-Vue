<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>杂谈</h2>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
            <CardCom :na='abutton' :ur='bbutton' :lnk='cbutton'></CardCom>
            <CardCom :na='aResponsive' :ur='bResponsive' :lnk='cResponsive'></CardCom>
            <CardCom :na='at' :ur='bt' :lnk='ct'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1, scard2, scard4} from '../pages/zhihu.js'
import {scard1t, scard2t, scard4t} from '../pages/talk-ux.js'
import {button1, button2, button4} from '../pages/c-button'
import {talkResponsive1, talkResponsive2, talkResponsive4} from '../pages/talk-responsive'



export default {
    name: 'TalkView',
    data:()=>{
    return{
        a:scard1,b:scard2,c:scard4,
        at:scard1t,bt:scard2t,ct:scard4t,
        abutton:button1,bbutton:button2,cbutton:button4,
        aResponsive:talkResponsive1,bResponsive:talkResponsive2,cResponsive:talkResponsive4,
        }
    },
  components: { CardCom}
}
</script>
