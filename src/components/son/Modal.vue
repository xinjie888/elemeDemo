<template>
  <div @click="quXiao" class="modal">
    <div @click="myEvent($event)" class="dialog">
      <h3 class="dialog_title">{{parameter.title}}</h3>
      <div class="dialog_text">{{parameter.msg}}</div>
      <div>
        <div :class="parameter.btnOk==false?'btn2 pstOk2':'btn1 pstQx1'" @click="quXiao" v-show="parameter.btnQx">取消</div>
        <div :class="parameter.btnQx==false?'btn2 pstOk2':'btn1 pstOk1'" @click="queDing" v-show="parameter.btnOk">确定</div>
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
          this.$emit('confirm');
      },
      myEvent(e){
          e.stopPropagation();
      }
  },
  mounted(){

  }
}
</script>
<style>
.modal{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    z-index:10000;
}
.dialog{
    width:80%;
    height:400px;
    border-radius:10px;
    position:absolute;
    top:38%;
    left:10%;
    background:#f4f4f4;
    z-index:10001;
}
.btn1{
    display:inline-block;
    width:50%;
    height:110px;
    line-height:110px;
    text-align:center;
    font-size:50px;
    border-top:1px solid #ddd;
}
.btn2{
    display:inline-block;
    width:100%;
    height:110px;
    line-height:110px;
    text-align:center;
    font-size:50px;
    border-top:1px solid #ddd;
}
.pstOk1{
    position:absolute;
    bottom:0px;
    right:0px;
    border-radius:0 0 10px 0;
    color:#26a2ff;
}
.pstOk2{
    position:absolute;
    bottom:0px;
    right:0px;
    border-radius:0 0 10px 10px;
    color:#26a2ff;
}
.pstQx1{
    position:absolute;
    bottom:0px;
    left:0px;
    border-radius:0 0 0 10px;
    color:#000;
    border-right:1px solid #ddd;
}
.pstQx2{
    position:absolute;
    bottom:0px;
    left:0px;
    border-radius:0 0 10px 10px;
    color:#000;
}
.dialog_title{
    height:100px;
    line-height:100px;
    font-size:50px;
    text-align:center;
    border-radius:10px 10px 0 0;
    margin:30px 0 0 0;
}
.dialog_text{
    height:110px;
    line-height:110px;
    text-align:center;
    font-size:50px;
    color:#999;
}
</style>