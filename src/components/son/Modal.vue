<template>
  <div class="modal">
    <div class="dialog">
      <h3 class="dialog_title">{{parameter.title}}</h3>
      <div class="dialog_text">{{parameter.msg}}</div>
      <div>
        <button class="btn gr pstQx" @click="quXiao" v-show="parameter.btnQx">取消</button>
        <button class="btn pstOk"  @click="queDing" v-show="parameter.btnOk">确定</button>
      </div>
    </div>
  </div>  
</template>
<script>
  export default {
  name: 'Modal',
  components:{
    
  },
  props:["parameter"],
  data () {
    return {
      msg: 'fdgfdgdf',
      myqx:false
    }
  },
  methods:{
      quXiao(){
          this.$emit('isModal',this.myqx);
      },
      queDing(){
          this.$router.push('/homepage');
      }
  },
  mounted(){
     
  }
}
</script>
<style>
.modal{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    z-index:10000;
}
.dialog{
    width:80%;
    height:600px;
    border-radius:30px;
    position:absolute;
    top:30%;
    left:10%;
    background:#fff;
    z-index:10001;
}
.btn{
    width:180px;
    height:80px;
    border:0;
    border-radius:10px;
    outline:none;
    font-weight:700;
    background:red;
    color:#fff;
}
.gr{
    background:#00ff00;
}
.pstOk{
    position:absolute;
    bottom:20px;
    right:50px;
}
.pstQx{
    position:absolute;
    bottom:20px;
    left:50px;
}
.dialog_title{
    height:130px;
    line-height:130px;
    font-size:70px;
    text-align:center;
    border-radius:30px 30px 0 0;
    background:red;
}
.dialog_text{
    height:200px;
    background:#f4f4f4;
    text-align:center;
    font-size:50px;
    padding:70px;
}
</style>