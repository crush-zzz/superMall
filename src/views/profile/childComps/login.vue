<template>
  <div class="loginBox">
    <loginin v-if="isActive"></loginin>
    <register v-else></register>
    <div class="change" v-if="isActive">
        还未有账号？
      <span @click="change">去注册</span>
    </div>
    <div class="change" v-else>
      已有账号?
      <span @click="change">去登录</span>
    </div>
  </div>
</template>

<script>
  import loginin from "./loginin";
  import register from "./register";
  export default {
    name: "login",
    components:{
      loginin,
      register
    },
    data(){
      return {
        isActive:true
      }
    },
    methods:{
      change(){
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  .loginBox{
    height: 100vh;
    overflow: hidden;
  }

  .change{
    text-align: center;
  }
  .change span{
    color: blue;
  }
</style>
