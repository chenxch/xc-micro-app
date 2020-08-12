<!--
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-07-27 09:07:18
--> 
<template>
  <div id="app">
    <el-container class="container">
      <el-aside class="hg-full" :width="isCollapse?'64px':'250px'" v-if="$store.state.kioks">
        <el-menu
          default-active="2"
          class="hg-full"
          @select="handleSelect"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#1890ff"
          :collapse="isCollapse"
          router
        >
          <el-menu-item :index="item.path" v-for="item in $router.options.routes" :key="item.path">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
              <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
          </el-menu-item>
        </el-menu>
      </el-aside>
      <div class="hm">
        <el-header class="navbar" height="50px" v-if="$store.state.kioks">
          <div class="hamburger-container">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"  @click="isCollapse=!isCollapse"></i>
          </div>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      text: '',
      isCollapse: false
    }
  },
  created(){
    console.log(this.$router);
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
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  height: 100%;
}
.hm {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.menu {
  width: 250px;
}
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
}
.main{
  flex: 1;
}
</style>
