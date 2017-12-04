<template>
  <div>
    <Back title="我的"></Back>
    <div class="myzone_content">
      <div class="clear">
        <img :src="'assets/img/'+avatar" alt="">
        <div class="myzone_uid">
          <h3>admin</h3>
          <p>183*****888</p>
        </div>
      </div>
    </div>
    <div class="three_lan">
        <router-link v-for="(tmp,index) in three" :key="index" :class="index==1?'three_lan_ a border':'three_lan_ a'" to="/order">
          <p  class="big_colorful">
            <span class="index-2FmrF_0" :style="index==0?'color:rgb(255,153,0)':index==1?'color:rgb(255,95,62)':index==2?'color:rgb(106,194,11)':''">{{tmp.tMsg}}</span><span  class="index-2V-Hh_0">{{tmp.danWei}}</span>
          </p>
          <p class="index-3S6cZ_0">{{tmp.tTitle}}</p>
        </router-link>
    </div>
    <router-link class="a" to="/order">
      <div class="some_bar mt">
        <svg class="v-md">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a">
          </use>
        </svg class="v-md">
        <span>我的订单</span>
      </div>
    </router-link>
    <div @click="myClick" class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop">
        </use>
      </svg>
      <span>积分商城</span>
    </div>
    <div  class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eleme">
        </use>
      </svg>
      <span>饿了么会员卡</span>
    </div>
    <div  class="some_bar mt">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137">
        </use>
      </svg>
      <span>服务中心</span>
    </div>
    <div  class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a">
        </use>
      </svg>
      <span>下载饿了么APP</span>
    </div>
    <Dnav></Dnav>
    <Modal @isModal="myModal" @confirm="confirmCallback" v-show="a" :parameter="myParm"></Modal>
  </div>
</template>   
<script>
  import Back from './son/Back'
  import Dnav from './son/Dnav'
  import Modal from './son/Modal'
  import { mapGetters } from 'vuex';
  export default {
  name: 'Myzone',
  components:{
    Back,
    Dnav,
    Modal
  },
  data () {
    return {
      msg: 'fdgfdgdf',
      avatar:"slider-pic11.jpeg",
      three:[
          {tMsg:"0.00",danWei:"元",tTitle:"余额"},
          {tMsg:3,danWei:"个",tTitle:"优惠"},
          {tMsg:6250,danWei:"分",tTitle:"积分"}
      ],
      a:false,
      myParm:{
        btnQx:true,
        btnOk:true,
        title:"提示",
        msg:"确定执行此操作？"
      },
      myConfirm:function(){
        return $router.push('/homepage');
      }
    }
  },
  methods:{
      myClick(){
        //console.log(this.a);
        this.a=!this.a;
      },
      myModal(msg){
        //console.log(msg);
       this.a=msg;
     },
     confirmCallback(){
       this.$router.push('/homepage');
     }
  },
  mounted(){
     this.$store.dispatch('setWhichpage', 'myzone');
  },
  beforeCreate(){
     if(sessionStorage.getItem("uname")==null){
       this.$router.push('/login/1');
     }
  }
}
</script>
  
<style>
body,h3,p{
    margin:0;
}
body{
    background:#f4f4f4;
}
.a{
    color: #333;
    text-decoration: none;
}
.myzone_content {
    width:960px;
    height:288px;
    margin-top:96px;
    padding:77px 38px;
    box-sizing:border-box;
    background:#0097ff;
}
.myzone_content img {
    width:134px;
    height:134px;
    border-radius:50%;
    float:left;
}
.myzone_uid {
    float: left;
    margin-left:48px;
    color:#fff;
}
.myzone_uid h3 {
    font-size:67px;
}
.myzone_uid p {
    font-size:38px;
}
.three_lan {
    display:table;
    width:100%;
    height:214px;
    border-bottom:1px solid #ddd;
    background-color:#fff;
}
.three_lan_ {
    display:table-cell;
    width:33.3333%;
    vertical-align:middle;
    text-align:center;
}
.big_colorful {
    line-height:38px;
}
.index-2FmrF_0 {
    padding-top:38px;
    font-size:58px;
    line-height:58px;
    font-weight:700;
}
.index-2V-Hh_0 {
    font-size:31px;
    line-height:31px;
}
.index-3S6cZ_0 {
    font-size:31px;
    line-height:36px;
    font-weight:500;
    color:#666;
}
.border{
    border-left:1px solid rgb(221,221,221);
    border-right:1px solid rgb(221,221,221);
}
.some_bar {
    width:960px;
    height:106px;
    padding:0 38px;
    box-sizing:border-box;
    background:#fff;
    font-size:38px;
    line-height:106px;
    border-top:1px solid #dedede;
}
.mt{
    margin-top:29px;
}
.v-md {
    vertical-align: middle;
}
.some_bar svg {
    width:38px;
    height:38px;
}
.some_bar span {
    margin-left:19px;
}
</style>