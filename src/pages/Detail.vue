<template>
    <div>
        <h2>{{id}}</h2>
        <DetailCom :na='a' :im='c'></DetailCom>
    </div>
</template>

<script>
    import DetailCom from '../components/detailCom.vue'
    import { scard1t, scard3t } from './zhihu2.js'

    export default {
        name: 'DetailViewYHTYQT',
        props:['id'],
        data: () => {
            return {
                a:scard1t, c:scard3t,
            }
        },
        components: {
            DetailCom
        }
    }
</script>