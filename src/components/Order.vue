<template>
<div>
  <div class="order">
    <Back title="订单"></Back>
    <div class="order_box">
      <div class="order_one" v-for="item in orderList">
        <div class="order_img">
          <img :src="'assets/img/logo/'+item.logoImage" alt="">
        </div>
        <div class="order_info">
          <div class="order_info_t">
            <div class="order_title">
              <p class="b_name">{{item.orderTitle}}</p>
              <p class="b_status">{{item.orderStatus}}</p>
            </div>
            <p class="order_time">{{item.orderTime}}</p>
          </div>
          <div class="order_info_b">
            <p class="order_brief_info">{{item.orderBrief}}</p>
            <p class="order_price">{{"¥"+item.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dnav></Dnav>
</div>  
</template>   
<script> 
  import { mapGetters } from 'vuex';
  import Dnav from './son/Dnav'
  import Back from './son/Back'

  export default {
  name: 'Order',
  components:{
      Dnav,
      Back
  },
  data () {
    return {
      orderList:[
          {id:1,orderTitle:"上沙麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 18:36",orderBrief:"麦香鸡腿堡",price:22.9},
          {id:2,orderTitle:"下沙麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 17:36",orderBrief:"七虾堡等2件商品",price:20},
          {id:3,orderTitle:"沙嘴麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 16:36",orderBrief:"麦香鸡腿堡等2件商品",price:23},
          {id:4,orderTitle:"沙尾麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 15:36",orderBrief:"薯条等3件商品",price:31.9},
          {id:5,orderTitle:"沙头麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 14:36",orderBrief:"麦香鸡腿堡",price:22.9},
          {id:1,orderTitle:"上沙麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 18:36",orderBrief:"麦香鸡腿堡",price:22.9},
          {id:2,orderTitle:"下沙麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 17:36",orderBrief:"七虾堡等2件商品",price:20},
          {id:3,orderTitle:"沙嘴麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 16:36",orderBrief:"麦香鸡腿堡等2件商品",price:23},
          {id:4,orderTitle:"沙尾麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 15:36",orderBrief:"薯条等3件商品",price:31.9},
          {id:5,orderTitle:"沙头麦当劳",logoImage:"shop-logo.png",orderStatus:"订单完成",orderTime:"2017-02-17 14:36",orderBrief:"麦香鸡腿堡",price:22.9}
      ]
    }
  },
  created(){
      //ifLogin==
  },
  mounted(){
     this.$store.dispatch('setWhichpage', 'order');
  },
  beforeCreate(){
     if(sessionStorage.getItem("uname")==null){
       this.$router.push('/login/1');
     }
  }
}
</script>
  
<style>
h3,p{
    margin:0;
}
body{
    margin:0;
    background:#f4f4f4;
}
.order_box {
    margin:96px 0 115px;
}
.order_one {
    background:#fff;
    margin-bottom:19px;
}
.order_img {
    width:96px;
    height:96px;
    float:left;
    padding:19px 38px;
}
.order_img img {
    width: 100%;
}
.order_info {
    margin-left:154px;
    padding:19px 19px 0 0;
    box-sizing:border-box;
}
.order_info_t {
    border-bottom:1px solid #eee;
}
.order_title {
    height:58px;
    line-height:58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order_title .b_name {
    font-size:38px;
}
.order_title .b_status {
    font-size:34px;
    color:#333;
}
.order_time {
    font-size:29px;
    color:#999;
    line-height:58px;
}
.order_info_b {
    padding:19px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order_brief_info {
    font-size:33px;
    color:#666;
}
.order_price {
    text-align:right;
    font-size:33px;
    color:#333;
    font-weight:bold;
}
</style>