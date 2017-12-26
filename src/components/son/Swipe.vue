<template>
  <div id="swipe">
    <slot></slot>
    <div id="db" v-show="isDb">
      <ul>
        <li v-for="item in list"></li>
      </ul>
    </div>
  </div>
</template>   
<script>
  export default {
  name: 'Swipe',
  components:{
    
  },
  props:["isDb"],
  data () {
    return {
      msg: 'fdgfdgdf',
      list:[]
    }
  },
  mounted(){
    this.list=[1,2]//document.querySelectorAll(".swipe-item");
    var swipeWidth=this.list[0].children[0].offsetWidth;
    var swipeHeight=this.list[0].children[0].offsetHeight;
    document.getElementById("swipe").style.cssText="width:"+swipeWidth+"px;height:"+swipeHeight+"px;";
    this.$nextTick(function () {
      document.querySelector("#db ul li").className="li";
    })
  }
}
</script>  
<style>
  #swipe{
      overflow:hidden;
      position:relative;
      padding-bottom:0px;
  }
  #db{
    width:100%;
    height:60px;
    position:absolute;
    left:0;
    bottom:0;
  }
  #db ul{
    margin:10px 0 0 0;
    padding:0;
    list-style:none;
    text-align: center;
  }
  #db ul li{
    width:12px;
    height:12px;
    border-radius:50%;
    background:#ccc;
    display:inline-block;
    margin:6px;
  }
  #db ul .li{
    background:#0096ff;
  }
</style>