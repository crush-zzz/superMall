<template>
  <div class="loginin">
    <nav-bar class="loginTop">
      <div slot="left" class="left" @click="back"><</div>
      <div slot="center">登录页</div>
    </nav-bar>
    <div class="info">
      <div class="user">
        <label for="use" class="lab" >
          用户名：
        </label>
        <input id="use"
               type="text"
               class="ipt"
               placeholder="用户名"
               v-model="user">
      </div>
      <div class="user">
        <label for="pass" class="lab">
          密&#12288;码：
        </label>
        <input id="pass"
               type="password"
               class="ipt"
               placeholder="密码"
               v-model="passWord">
      </div>
      <div class="agreement">
        <input type="checkbox" id="chbox" v-model="isChecked">
        <label for="chbox">注册协议及隐私政策</label>
      </div>
      <div class="log" @click="sign">
        <span> 登录</span>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  export default {
    name: "loginin",
    components:{
      NavBar
    },
    data(){
      return {
        userMessage:[
          {
            userName:'wangyaliang',
            passWord:'19951125'
          }
        ],
        user:'',
        passWord:'',
        isChecked:false,
        isLive:false
      }
    },
    methods:{
      back(){
        this.$router.go(-2)
      },
      sign(){
        let userMessage = this.$store.state.loginMessage
        userMessage.forEach(item => {
          if(item.userName === this.user && item.passWord === this.passWord && this.isChecked){
            this.isLive = true
          }
        })
        if(this.isLive){
          this.$router.push({
            name:'profile',
            params:{
              user:this.user,
              passWord:this.passWord
            }
          })
          this.$store.commit('changeMessage',this.user)
        }else {
          alert('用户名或密码错误，请重新输入')
        }
      }
    }
  }
</script>

<style scoped>
  .loginTop{
    background-color: var(--color-tint);
    color: #fff;
  }
  .left{
    height: 100%;
    width: 50px;
    font-size: 25px;
  }
  .info{
    height: 400px;
    /*border: 1px solid blue;*/
  }
  .user{
    font-size: 18px;
    width: 300px;
    margin: 30px auto;
    /*border: 1px solid red;*/
  }
  .user input{
    outline: none;
    border: 1px solid grey;
    height: 30px;
  }
  .lab{
    display: inline-block;
    width: 100px;
    /*border: 1px solid red;*/
  }
  .ipt{
    width: 200px;
  }
  .agreement{
    width: 200px;
    /*border: 1px solid red;*/
    font-size: 14px;
    text-align: center;
    margin: 0 auto ;
  }
  .agreement input{
    vertical-align: middle;
    width: 14px;
  }
  .agreement label{
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    height: 15px;
    line-height: 15px;
  }
  .log{
    width: 200px;
    height: 40px;
    margin: 40px auto ;
    background-color: orangered;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 18px;
  }
</style>
