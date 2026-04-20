<template>
  <div class='whoheigt color2'>
    <div class="whocont">
      <h2>思考</h2>
      <CardCom :na='talkUx.title' :ur='talkUx.cover' :lnk='talkUx.path'></CardCom>
      <CardCom :na='cButton.title' :ur='cButton.cover' :lnk='cButton.path'></CardCom>
      <CardCom :na='talkResponsive.title' :ur='talkResponsive.cover' :lnk='talkResponsive.path'></CardCom>
      <CardCom :na='talkRule.title' :ur='talkRule.cover' :lnk='talkRule.path'></CardCom>
      <CardCom :na='talkResearch.title' :ur='talkResearch.cover' :lnk='talkResearch.path'></CardCom>
      <CardCom :na='talkShadow.title' :ur='talkShadow.cover' :lnk='talkShadow.path'></CardCom>
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { talkUx } from '../pages/talk-ux.js'
import { cButton } from '../pages/c-button.js'
import { talkResponsive } from '../pages/talk-responsive.js'
import { talkRule } from '../pages/talk-rule.js'
import { talkResearch } from '../pages/talk-research.js'
import { talkShadow } from '../pages/talk-shadow.js'

export default {
  name: 'TalkView',
  components: { CardCom },
  data() {
    return {
      talkUx,
      cButton,
      talkResponsive,
      talkRule,
      talkResearch,
      talkShadow,
    }
  },
}
</script>
