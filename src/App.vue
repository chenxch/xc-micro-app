<!--
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-07-27 09:07:18
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input v-model="text"/><button @click="sure">传给父应用</button>
    </div>
    <HelloWorld msg="我是微应用"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      text: ''
    }
  },
  methods:{
    sure(){
        if(this.text){
          const state = { text:this.text};
            // const actions = this.$initGlobalState(state);
            console.log(this.$action);
            this.$action.setGlobalState(state);
        }
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
