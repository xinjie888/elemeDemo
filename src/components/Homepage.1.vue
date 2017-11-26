<template>
  <div>
    <Head></Head>
    <Nav></Nav>
    <Dnav></Dnav>
  </div>
</template>   
<script>
  import Head from './son/Head'
  import Nav from './son/Nav'
  import Dnav from './son/Dnav'
  
import { mapGetters } from 'vuex';
  export default {
  name: 'Order',
  components:{
    Head,
    Nav,
    Dnav
  },
  data () {
    return {
      msg: 'fdgfdgdf'
    }
  },
  mounted(){
     this.$store.dispatch('setWhichpage', 'order');
  }
}
</script>
  
<style>
</style>