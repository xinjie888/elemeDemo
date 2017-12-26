<template>
  <div>
    <Head></Head>
    <Swipe :isDb="swipeDb">
      <SwipeItem>
        <Nav :navList="navList1"></Nav>
      </SwipeItem>
      <SwipeItem>
        <Nav :navList="navList2"></Nav>
      </SwipeItem>
    </Swipe>
    <Seller></Seller>
    <Dnav></Dnav>
  </div>
</template>   
<script>
  import Head from './son/Head'
  import Seller from './son/Seller'
  import Dnav from './son/Dnav'
  import Swipe from './son/Swipe'
  import SwipeItem from './son/Swipe-item'
  import Nav from './son/Nav'
  
  import { mapGetters } from 'vuex';
  export default {
  name: 'Homepage',
  components:{
    Head,
    Seller,
    Dnav,
    Swipe,
    SwipeItem,
    Nav
  },
  data () {
    return {
      swipeDb:true,
      msg: 'fdgfdgdf',
      navList1:[
          {id:1,title:"美食",image:"slider-pic1.jpeg"},
          {id:2,title:"甜品饮品",image:"slider-pic2.jpeg"},
          {id:3,title:"商店超市",image:"slider-pic3.jpeg"},
          {id:4,title:"预定早餐",image:"slider-pic4.jpeg"},
          {id:5,title:"果蔬生鲜",image:"slider-pic5.jpeg"},
          {id:6,title:"新店特惠",image:"slider-pic6.jpeg"},
          {id:7,title:"准时达",image:"slider-pic7.jpeg"},
          {id:8,title:"夜宵",image:"slider-pic8.jpeg"}
      ],
      navList2:[
          {id:1,title:"土豪推存",image:"slider-pic9.jpeg"},
          {id:2,title:"鲜花蛋糕",image:"slider-pic10.jpeg"},
          {id:3,title:"汉堡",image:"slider-pic11.jpeg"},
          {id:4,title:"日韩料理",image:"slider-pic12.jpeg"},
          {id:5,title:"麻辣烫",image:"slider-pic13.jpeg"},
          {id:6,title:"披萨意面",image:"slider-pic14.jpeg"},
          {id:7,title:"川湘菜",image:"slider-pic15.jpeg"},
          {id:8,title:"包子粥店",image:"slider-pic16.jpeg"}
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
</style>