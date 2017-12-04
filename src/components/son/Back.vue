<template>
  <div>
    <div class="back_box">
      <div class="back_arrow"  @click="back_one">
        <svg data-v-bc04b548="">
          <use data-v-bc04b548="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e">
          </use>
        </svg>
      </div>
      <h3>{{title}}</h3>
    </div>
  </div>
</template>   
<script>
  export default {
  name: 'Back',
  props:["title","page"],
  components:{
  },
  data () {
    return {
      msg: 'fdgfdgdf'
    }
  },
  methods: {
    back_one () {
      if(sessionStorage.getItem("uname")==null&&this.page=="homepage"){
        this.$router.go(-1);
      }else if(sessionStorage.getItem("uname")==null){
        this.$router.go(-2);
      }else{
        this.$router.go(-1);
      }
    }
  }
}
</script>
  
<style>
.back_box {
    width:960px;
    height:96px;
    line-height:96px;
    position:fixed;
    background:#0096ff;
    top:0;
    left:0;
    right:0;
    z-index:999;
}
.back_arrow {
    width:96px;
    height:96px;
    position:absolute;
    left:0;
    top:0;
}
.back_arrow svg {
    width:57.6px;
    height:57.6px;
    position:absolute;
    left:19.2px;
    top:19.2px;   
}
.back_box h3 {
    color:#fff;
    width:100%;
    display:block;
    font-size:50px;
    text-align:center;
    font-weight:700;
    margin:0;
}
</style>