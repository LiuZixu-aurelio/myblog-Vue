<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>作品1</h2>
            <cardcom :title='scard'></cardcom>
        </div>
    </div>
</template>

<script>
import cardcom from '../components/cardCom.vue'

export default {
  name: 'TalkView',
  components: { cardcom }
}
</script>
