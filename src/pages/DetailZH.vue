<template>
    <div>
        <DetailCom :na='a' :im='c'></DetailCom>
    </div>
</template>

<script>
    import DetailCom from '../components/detailCom.vue'
    import { scard1, scard3 } from './zhihu.js'

    export default {
        name: 'DetailViewZH',
        data: () => {
            return {
                a:scard1, c:scard3,
            }
        },
        components: {
            DetailCom
        }
    }
</script>