<template>
      <p>Hello</p>

</template>

<script>
/* loopy()   
function loopy() {   
  var sWord =""  
  while (sWord != "123") {//设置密码
  sWord = prompt("输入正确密码才能登陆!")   
  }     
}   */

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
  },
  beforeUnmount(){
    console.log(`beforeUnmount.`)
  },
  unmounted(){
    console.log(`unmounted.`)
  }

}
</script>
