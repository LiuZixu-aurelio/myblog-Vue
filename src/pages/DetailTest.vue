<template>
    <div>
        <DetailCom :na='a' :im='c'></DetailCom>
    </div>
</template>

<script>
    import DetailCom from '../components/detailCom.vue'
    import { extest1, extest3 } from './testhub.js'

    export default {
        name: 'DetailViewTest',
        data: () => {
            return {
                a:extest1, c:extest3,
            }
        },
        components: {
            DetailCom
        }
    }
</script>