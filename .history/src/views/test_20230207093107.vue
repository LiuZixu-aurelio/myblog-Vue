<template>
      <p>Hello</p>

</template>

<script>
export default {
  name: 'test',
  beforeCreate(){
    console.log('beforeCreate')

  },
  created(){
    console.log('created')

  },
  beforeMount(){
    console.log('beforeMount')
  },

  mounted() {
    console.log(`mounted.`)
  }

}
</script>
