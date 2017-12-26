<template>
  <div class="nav">
    <div class="common_slider" v-for="item in navList">
      <a href="">
        <img :src="'assets/img/'+item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Nav',
    props:["navList"],
    data () {
      return {
        msg: 'fdgfdgdf'
      }
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