<template>
  <div>
    <Head></Head>
    <Swipe>
      <SwipeItem>
        <div class="nav">
          <div class="common_slider" v-for="item in navList">
            <a href="">
              <img :src="'assets/img/'+item.image" alt="">
              <p>{{item.title}}</p>
            </a>
          </div>
        </div>
      </SwipeItem>
      <SwipeItem>
        <div class="nav">
          <div class="common_slider" v-for="item in navList">
            <a href="">
              <img :src="'assets/img/'+item.image" alt="">
              <p>{{item.title}}</p>
            </a>
          </div>
        </div>
      </SwipeItem>
    </Swipe>
    <Nav></Nav>
    <Dnav></Dnav>
  </div>
</template>   
<script>
  import Head from './son/Head'
  import Nav from './son/Nav'
  import Dnav from './son/Dnav'
  import Swipe from './son/Swipe'
  import SwipeItem from './son/Swipe-item'
  
  import { mapGetters } from 'vuex';
  export default {
  name: 'Homepage',
  components:{
    Head,
    Nav,
    Dnav,
    Swipe,
    SwipeItem
  },
  data () {
    return {
      msg: 'fdgfdgdf',
      navList:[
          {id:1,title:"美食",image:"slider-pic1.jpeg"},
          {id:2,title:"甜品饮品",image:"slider-pic2.jpeg"},
          {id:3,title:"商店超市",image:"slider-pic3.jpeg"},
          {id:4,title:"预定早餐",image:"slider-pic4.jpeg"},
          {id:5,title:"果蔬生鲜",image:"slider-pic5.jpeg"},
          {id:6,title:"新店特惠",image:"slider-pic6.jpeg"},
          {id:7,title:"准时达",image:"slider-pic7.jpeg"},
          {id:8,title:"夜宵",image:"slider-pic8.jpeg"}
      ]
    }
  },
  mounted(){
     //sessionStorage.setItem("uname",0);
     this.$store.dispatch('setWhichpage', 'homepage');
  }
}
</script>
  
<style>
.nav{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background:#fff;
    padding-bottom:60px;
}
</style>