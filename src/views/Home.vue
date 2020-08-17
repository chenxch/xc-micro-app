<!--
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-08-11 15:32:23
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="goto">go about</el-button>
    <HelloWorld msg="Welcome to Your Micro App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    goto(){
      this.$router.push({path:'/about'})
    }
  }
}
</script>
