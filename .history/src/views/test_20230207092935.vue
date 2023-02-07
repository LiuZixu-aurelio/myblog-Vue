<template>
      <p>Hello</p>

</template>

<script>
export default {
  name: 'test',
  beforeMount(){
    console.log('beforeMount')
  },

  mounted() {
    console.log(`the component is now mounted.`)
  }

}
</script>
