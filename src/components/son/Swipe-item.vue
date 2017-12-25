<template>
  <div class="swipe-item" @touchstart="start" @touchend="end" @touchmove="move">
    <slot></slot>
  </div>
</template>   
<script>
  export default {
  name: 'SwipeItem',
  components:{
    
  },
  data () {
    return {
      msg: 'fdgfdgdf',
      startPageX:0,
      itemWidth:0,
      items:[]
    }
  },
  methods:{
      start(e){
          console.log(e.changedTouches[0].pageX);
          this.startPageX=e.changedTouches[0].pageX;
      },
      end(e){
          console.log(document.querySelectorAll("#db ul li"));
          var li=document.querySelectorAll("#db ul li");
          var item=e.currentTarget;
          var endPageX=e.changedTouches[0].pageX;
          var juli=endPageX-this.startPageX;
          if(juli>this.itemWidth/2){
            if(item.index==0){
              this.items[this.items.length-1].style.cssText="left:0px;transition:all .3s linear;";
              li[li.length-1].className="li";
            }else{
              item.previousElementSibling.style.cssText="left:0px;transition:all .3s linear;";
              li[item.index-1].className="li";
            }
            item.style.cssText="left:"+this.itemWidth+"px;transition:all .3s linear;";
            li[item.index].className="";
          }else if(juli<=this.itemWidth/2 && juli>0){
            if(item.index==0){
              this.items[this.items.length-1].style.cssText="left:-"+this.itemWidth+"px;transition:all .3s linear;";
            }else{
              item.previousElementSibling.style.cssText="left:-"+this.itemWidth+"px;transition:all .3s linear;";
            }
            item.style.cssText="left:0px;transition:all .3s linear;";
          }else if(juli<-1*(this.itemWidth/2)){
            if(item.index==this.items.length-1){
              this.items[0].style.cssText="left:0px;transition:all .3s linear;";
              li[0].className="li";
            }else{
              item.nextElementSibling.style.cssText="left:0px;transition:all .3s linear;";
              li[item.index+1].className="li";
            }
            item.style.cssText="left:-"+this.itemWidth+"px;transition:all .3s linear;";
            li[item.index].className="";
          }else if(juli>-1*(this.itemWidth/2) && juli<0){
            if(item.index==this.items.length-1){
              this.items[0].style.cssText="left:"+this.itemWidth+"px;transition:all .3s linear;";
            }else{
              item.nextElementSibling.style.cssText="left:"+this.itemWidth+"px;transition:all .3s linear;";
            }
            item.style.cssText="left:0px;transition:all .3s linear;";
          }
      },
      move(e){
        var item=e.currentTarget;
        //console.log(e.changedTouches[0].pageX-this.startPageX);
        if(e.changedTouches[0].pageX-this.startPageX>0){
          if(item.index==0){
            this.items[this.items.length-1].style.cssText="left:"+(-1*this.itemWidth+(e.changedTouches[0].pageX-this.startPageX))+"px;transition:all 0s linear;";
          }else{
            item.previousElementSibling.style.cssText="left:"+(-1*this.itemWidth+(e.changedTouches[0].pageX-this.startPageX))+"px;transition:all 0s linear;";
          }
          item.style.cssText="left:"+(e.changedTouches[0].pageX-this.startPageX)+"px;transition:all 0s linear;";
        }else{
          if(item.index==this.items.length-1){
            this.items[0].style.cssText="left:"+(this.itemWidth+(e.changedTouches[0].pageX-this.startPageX))+"px;transition:all 0s linear;";
          }else{
            item.nextElementSibling.style.cssText="left:"+(this.itemWidth+(e.changedTouches[0].pageX-this.startPageX))+"px;transition:all 0s linear;";
          }
          item.style.cssText="left:"+(e.changedTouches[0].pageX-this.startPageX)+"px;transition:all 0s linear;";
        }
      }
  },
  mounted(){
    this.items=document.querySelectorAll(".swipe-item"); 
    this.itemWidth=this.items[0].offsetWidth;
    //console.log(itemWidth);
    for(var i=0;i<this.items.length;i++){
      if(i==this.items.length-1){
        this.items[i].index=i;
        this.items[i].style.left=-1*this.itemWidth+"px";
      }else{
        this.items[i].index=i;
        this.items[i].style.left=i*this.itemWidth+"px";
      }
    }
  }
}
</script>  
<style>
  .swipe-item{
      width:100%;
      height:100%;
      position:absolute;
      top:0;
  }
</style>