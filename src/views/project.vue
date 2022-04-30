<template>
    <div class='whoheigt color2'>
        <div class="whocont">
            <h2>作品</h2>
            <CardCom :na='a' :ur='b'></CardCom>
            <CardCom :na='at' :ur='bt'></CardCom>
        </div>
    </div>
</template>

<script>
    import CardCom from '../components/cardCom.vue'
    import {scard1, scard2} from '../pages/zhihu.js'
    import {scard1t, scard2t} from '../pages/zhihu2.js'
    console.log(scard2)
    export default {
        name: 'ProjectView',
        data:()=>{
            return{
                a:scard1,b:scard2,
                at:scard1t,bt:scard2t
                }
        },
        components: {
            CardCom
        }
    }
</script>