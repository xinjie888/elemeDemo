<template>
  <div>
    <Back title="登录" :page="page"></Back>
    <div class="input_login">
      <input type="text" placeholder="用户名" v-model="uname">
      <input type="password" placeholder="密码" v-model="upwd">
      <button @click="loginClick">登录</button>
    </div>
    <Modal @isModal="myModal" @confirm="confirmCallback" v-show="a" :parameter="myParm"></Modal>
  </div>
</template>
<script>
  import Back from './son/Back'
  import Modal from './son/Modal'
  export default {
  name: 'Login',
  components:{
    Back,
    Modal
  },
  data () {
    return {
      msg: 'fdgfdgdf',
      uname:"admin",
      upwd:"admin",
      a:false,
      myParm:{
        btnQx:false,
        btnOk:true,
        title:"提示",
        msg:""
      },
      page:this.$route.params.id
    }
  },
  methods:{
      loginClick(){
          if(this.uname=="admin"&&this.upwd=="admin"){
            sessionStorage.setItem("uname",1);
            this.$router.go(-1);
          }else{
             this.myParm.msg="用户名密码错误！";
             this.a=!this.a;
          }
      },
      myModal(msg){
        //console.log(msg);
       this.a=msg;
     },
     confirmCallback(){
       this.a=false;
     }
  },
  mounted(){
    console.log(this.$route.params.id);
     this.$store.dispatch('setWhichpage', 'homepage');
  }
}
</script>
<style>
body{
    margin:0;
    background:#f4f4f4;
}
.input_login {
    margin-top:130px;
}
.input_login input {
    height:115px;
    width:960px;
    padding:58px;
    box-sizing:border-box;
    border:none;
    outline:none;
    font-size:43px;
    display:block;
    background-color:rgb(250, 255, 189);
    color:#000;
    margin:0;
}
.input_login button {
    margin:58px auto;
    display:block;
    width:864px;
    height:96px;
    font-size:48px;
    background:#4cd964;
    border:none;
    outline:none;
    color:#fff;
    border-radius:10px;
}
</style>