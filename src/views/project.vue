<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>作品</h2>
            <CardCom na="666"></CardCom>
        </div>
    </div>
</template>

<script>
    import CardCom from '../components/cardCom.vue'
    import scard from '../pages/zhihu.js'

    export default {
        name: 'ProjectView',
        components: {
            CardCom
        }
    }
</script>