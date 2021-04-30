<template>
  <div class="loginin">
    <nav-bar class="loginTop">
      <div slot="left" class="left" @click="back"><</div>
      <div slot="center">注册页</div>
    </nav-bar>
    <div class="info">
      <div class="user">
        <label for="use" class="lab">
          用户名：
        </label>
        <input id="use" type="text"  class="ipt" placeholder="用户名" v-model="userName">
      </div>
      <div class="user">
        <label for="pass" class="lab">
          密&#12288;码：
        </label>
        <input id="pass"  type="password" class="ipt" placeholder="密码" v-model="passWord">
      </div>
      <div class="user">
        <label for="pass2" class="lab">
          确认密码：
        </label>
        <input id="pass2"  type="password" class="ipt" placeholder="确认密码" v-model="passWord2">
      </div>
      <div class="log" @click="register">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  export default {
    name: "register",
    components:{
      NavBar
    },
    data(){
      return {
        userName:'',
        passWord:'',
        passWord2:''
      }
    },
    methods:{
      back(){
        this.$router.go(-2)
      },
      register(){
        if(this.userName !== '' && this.passWord !== '' && this.passWord === this.passWord2){
          let loginMessage = this.$store.state.loginMessage
          // 不能用foreach 会重复
          let userMessage = [];
          for (let item of loginMessage){
            userMessage.push(item.userName)
          }
          if(userMessage.includes(this.userName)){
            alert('用户名重复，请重新输入')
          }else {
            this.$store.commit('addMessage',{userName:this.userName,passWord:this.passWord})
            alert('注册成功，请登录')
            this.userName = ''
            this.passWord = ''
            this.passWord2= ''
          }

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
  input{
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
