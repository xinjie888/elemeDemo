<template>
<div class="header">
  <div class="index_location">
    <div class="ell">
      <svg class="head_svg">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
      </svg>
      <span class="haed_dizhi">深圳市福田区这里是个假定位村淡定啦~这不重要</span>
    </div>
    <div class="index_login" v-if="!getLogin">
      <router-link v-show="isLogin==null" :to="'/login/'+page">登录</router-link>
    </div>
  </div> 
  <div class="search_box">
    <input class="search" type="text" placeholder="搜索商家、商品">
  </div>
  <div class="hot_word">
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
    <a href="#/search/辣鸭脖">
      <span>辣鸭脖</span>
    </a>
  </div>
</div>
</template>   
<script>
  export default {
  name: 'Head',
  data () {
    return {
      msg: 'fdgfdgdf',
      isLogin:sessionStorage.getItem("uname"),
      page:"homepage"
    }
  }
}
</script>
<style>
  body{
    margin:0;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  }
  a {
    color: #333;
    text-decoration: none;
}
  .header{
    background:#0096ff;
    position:relative;
    width:960px;
    height:288px;
    box-sizing:border-box;
    padding:24.96px;
    overflow:hidden;
  }
  .head_svg{
    width:48px;
    height:48px;
    vertical-align: middle;
  }
  .haed_dizhi{
    font-size:38.4px;
    color:#fff;
    vertical-align: middle;
  }
  .index_login a{
    color:#fff;
  }
  .index_login{
    position:absolute;
    height:96px;
    font-size:33.6px;
    line-height:96px;
    padding:0 19.2px;
    right:0;
    top:0;
  }
  .search_box{
    width:864px;
    margin:0 auto;
    height:86.4px;
  }
  .search{
    width:100%;
    height:88.4px;
    font-size:38.4px;
    text-align:center;
    border-radius:43.2px;
    border:0; 
    outline:none;
    padding:0;
    display: block;
  }
  .ell {
    width: 768px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .index_location {
    height:86.4px;
    color: #fff;
    width: 960px;
    font-size:38.4px;
}
.hot_word {
    height: 115px;
    line-height:86px;
    font-size:29px;
    width:910px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.hot_word a{
    color:#fff;
}
.hot_word span {
    padding:10px;
}
::-webkit-scrollbar{
  display:none;
}
  
</style>