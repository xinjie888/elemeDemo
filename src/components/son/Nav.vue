<template>
<div class="clear">
  <div class="nav">
    <div class="common_slider" v-for="item in navList">
      <a href="">
        <img :src="'assets/img/'+item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
  <h3 class="index_title">推存商家</h3>
  <div class="main">
    <div v-for="tmp in productList">
      <a class="clear" style="display:block" href="">
        <div class="business_img">
          <img :src="'assets/img/'+tmp.image" alt="">
        </div>
        <div class="business_info">
          <section class="business_name clear">
            <h3>
              <span v-show="tmp.title[0]">{{tmp.title[0]}}</span>{{tmp.title[1]}}
            </h3>
            <div class="fr">
              <div v-for="msg in tmp.service" class="bzp">
                <i>{{msg}}</i>
              </div>
            </div>
          </section>
          <section class="business_code clear">
            <div class="code_num fl">
              <svg class="v-md">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star">
                </use>
              </svg>
              <span class="v-md">{{tmp.judge}}</span>
            </div>
            <div class="fr">
              <div v-for="(judgeService,index) in tmp.judgeService" :class="index==0?'zsd':index==1?'fnzs':''">{{judgeService}}</div>
            </div>
          </section>
          <section class="business_other clear">
            <div class="fl">
              <span class="com_gray1">{{"¥"+tmp.price}}</span>
              <span>/</span>
              <span class="com_gray1">{{"配送费约¥"+tmp.delivery}}</span>
            </div>
            <div class="fr">
              <span class="com_gray2">{{tmp.distance+"m"}}</span>
              <span>/</span>
              <span class="com_blue">{{tmp.time+"分钟"}}</span>
            </div>  
          </section>
        </div>
      </a>  
    </div>
  </div>
</div>  
</template>   
<script>
  export default {
  name: 'Nav',
  data () {
    return {
      msg: 'fdgfdgdf',
      navList:[{

      }],
      navList:[
          {id:1,title:"美食",image:"slider-pic1.jpeg"},
          {id:2,title:"甜品饮品",image:"slider-pic2.jpeg"},
          {id:3,title:"商店超市",image:"slider-pic3.jpeg"},
          {id:4,title:"预定早餐",image:"slider-pic4.jpeg"},
          {id:5,title:"果蔬生鲜",image:"slider-pic5.jpeg"},
          {id:6,title:"新店特惠",image:"slider-pic6.jpeg"},
          {id:7,title:"准时达",image:"slider-pic7.jpeg"},
          {id:8,title:"夜宵",image:"slider-pic8.jpeg"}
      ],

      productList:[
          {id:1,title:["品牌","上沙麦当劳"],image:"slider-pic1.jpeg",judge:4.7,price:20,delivery:5,service:["保","票","准"],judgeService:["准时达","蜂鸟专送"],distance:637,time:30},
          {id:1,title:["","正宗川味卤鸡蛋，味道好的很！"],image:"slider-pic1.jpeg",judge:3.5,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:347,time:20},
          {id:1,title:["","有家蛋糕店（下沙店）"],image:"slider-pic1.jpeg",judge:4.4,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:637,time:30},
          {id:1,title:["品牌","宇宙炸鸡（上沙店）"],image:"slider-pic1.jpeg",judge:4.3,price:20,delivery:5,service:["保","准"],judgeService:[],distance:127,time:10},
          {id:1,title:["","胖哥烧烤（车公庙店）"],image:"slider-pic1.jpeg",judge:4.6,price:20,delivery:4,service:["保","准"],judgeService:[],distance:500,time:10},
          {id:1,title:["品牌","上沙麦当劳"],image:"slider-pic1.jpeg",judge:4.7,price:20,delivery:5,service:["保","票","准"],judgeService:["准时达","蜂鸟专送"],distance:637,time:30},
          {id:1,title:["","正宗川味卤鸡蛋，味道好的很！"],image:"slider-pic1.jpeg",judge:3.5,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:347,time:20},
          {id:1,title:["","有家蛋糕店（下沙店）"],image:"slider-pic1.jpeg",judge:4.4,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:637,time:30},
          {id:1,title:["品牌","宇宙炸鸡（上沙店）"],image:"slider-pic1.jpeg",judge:4.3,price:20,delivery:5,service:["保","准"],judgeService:[],distance:127,time:10},
          {id:1,title:["","胖哥烧烤（车公庙店）"],image:"slider-pic1.jpeg",judge:4.6,price:20,delivery:4,service:["保","准"],judgeService:[],distance:500,time:10},
          {id:1,title:["品牌","上沙麦当劳"],image:"slider-pic1.jpeg",judge:4.7,price:20,delivery:5,service:["保","票","准"],judgeService:["准时达","蜂鸟专送"],distance:637,time:30},
          {id:1,title:["","正宗川味卤鸡蛋，味道好的很！"],image:"slider-pic1.jpeg",judge:3.5,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:347,time:20},
          {id:1,title:["","有家蛋糕店（下沙店）"],image:"slider-pic1.jpeg",judge:4.4,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:637,time:30},
          {id:1,title:["品牌","宇宙炸鸡（上沙店）"],image:"slider-pic1.jpeg",judge:4.3,price:20,delivery:5,service:["保","准"],judgeService:[],distance:127,time:10},
          {id:1,title:["","胖哥烧烤（车公庙店）"],image:"slider-pic1.jpeg",judge:4.6,price:20,delivery:4,service:["保","准"],judgeService:[],distance:500,time:10},
          {id:1,title:["品牌","上沙麦当劳"],image:"slider-pic1.jpeg",judge:4.7,price:20,delivery:5,service:["保","票","准"],judgeService:["准时达","蜂鸟专送"],distance:637,time:30},
          {id:1,title:["","正宗川味卤鸡蛋，味道好的很！"],image:"slider-pic1.jpeg",judge:3.5,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:347,time:20},
          {id:1,title:["","有家蛋糕店（下沙店）"],image:"slider-pic1.jpeg",judge:4.4,price:20,delivery:0,service:["保","准"],judgeService:["准时达"],distance:637,time:30},
          {id:1,title:["品牌","宇宙炸鸡（上沙店）"],image:"slider-pic1.jpeg",judge:4.3,price:20,delivery:5,service:["保","准"],judgeService:[],distance:127,time:10},
          {id:1,title:["","胖哥烧烤（车公庙店）"],image:"slider-pic1.jpeg",judge:4.6,price:20,delivery:4,service:["保","准"],judgeService:[],distance:500,time:10}
      ]
    }
  }
}
</script>
  
<style>
.clear:after{
    content:"";
    display:block;
    clear:both;
}
body{
      margin:0;
      background:#f4f4f4;
  }
p{
    margin:0;
}
.nav{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background:#fff;
    margin-bottom:19px;
}
.main{
    background:#fff;
    margin-bottom:116px;
}
.common_slider {
    width:240px;
    height:192px;
}
.common_slider a{
    display:block;
}
.common_slider img {
    margin: 0 auto;
    display: block;
    width:115px;
    height:115px;
    margin-top:19px;
}
.common_slider p {
    text-align: center;
    font-size:29px;
}
.index_title {
    line-height:77px;
    font-weight: 600;
    background: #fff;
    border-top: 1px solid #f4f4f4;
    font-size:38px;
    padding-left:38px;
    margin:0;
}
.business_img{
    width:154px;
    height:154px;
    padding:38px;
    float:left;
}
.business_img img{
    width:100%;
    height:100%;
}
.business_info{
    width:710px;
    height:154px;
    padding:38px 19px 38px 0;
    float:right;
}
.business_name{
    font-size:34px;
    line-height:43px;
    vertical-align:top;
}
.business_name h3 {
    width:480px;
    display:inline-block;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin:0;
}
.business_name h3 span {
    color: #52250a;
    background: #ffd930;
    font-size:19px;
    padding:2px;
    border-radius:2px;
    vertical-align:top;
    margin-right:4px;
}
.fl{
    float:left;
}
.fr{
    float:right;
}
.v-md {
    vertical-align: middle;
}
.bzp {
    width:28.8px;
    height:28.8px;
    font-size:24.96px;
    line-height:28.8px;
    text-align:center;
    display:inline-block;
    color:#999;
    border:1px solid #ddd;
    display: inline-block;
    padding:2px;
    margin:5px;
    border-radius:3px;
}
.bzp i {
    font-style:normal;
}
.business_code{
    font-size:24px;
    margin-top:29px;
    line-height:24px;
}
.code_num svg {
    width:29px;
    height:29px;
    fill:#ffaa0c;
}
.code_num span{
    line-height:29px;
}
.zsd {
    font-size:24px;
    height:34px;
    line-height:34px;
    margin: 0 4px;
    padding:0 5px;
    display: inline-block;
    color: #0096ff;
    background: #fff;
    border:1px solid #0096ff;
    box-sizing:border-box;
    border-radius:3px;
}
.fnzs {
    font-size:24px;
    height:34px;
    line-height:34px;
    margin: 0 4px;
    padding:0 5px;
    display: inline-block;
    color: #fff;
    background: #0096ff;
    border:1px solid #0096ff;
    box-sizing:border-box;
    border-radius:3px;
}
.business_other {
    font-size:24px;
    margin-top:29px;
    line-height:24px;
}
.com_gray1 {
    color: #666;
}
.com_gray2 {
    color: #999;
}
.com_blue {
    color: #0096ff;
}
</style>