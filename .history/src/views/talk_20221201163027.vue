<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>杂谈</h2>
            <CardCom :na='scard1t' :ur='scard2t' :lnk='scard4t'></CardCom>
            <CardCom :na='button1' :ur='button2' :lnk='button4'></CardCom>
            <CardCom :na='talkResponsive1' :ur='talkResponsive2' :lnk='talkResponsive4'></CardCom>
            <CardCom :na='talkrule1' :ur='talkrule2' :lnk='talkrule4'></CardCom>
        </div>
    </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import {scard1t, scard2t, scard4t} from '../pages/talk-ux.js'
import {button1, button2, button4} from '../pages/c-button'
import {talkResponsive1, talkResponsive2, talkResponsive4} from '../pages/talk-responsive'
import {talkrule1, talkrule2, talkrule4} from '../pages/talk-rule'




export default {
    name: 'TalkView',
    data:()=>{
    return{
        scard1t,scard2t,scard4t,
        button1,button2,button4,
        talkResponsive1,talkResponsive2,talkResponsive4,
        talkrule1,talkrule2,talkrule4,
        }
    },
  components: { CardCom}
}
</script>
