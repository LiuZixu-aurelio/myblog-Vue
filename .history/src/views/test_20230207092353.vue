<template>
      <p>Hello</p>

</template>

<script>
export default {
  name: 'test',
  mounted() {
    console.log(`the component is now mounted.`)
  },
  unmount(){console.log(`the component is unmounted.`)}

}
</script>
