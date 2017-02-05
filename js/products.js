$(function(){
     var len  = $(".number > li").length;
   var index = 0;
   var adTimer;
   $(".number li").mouseover(function(){
    index = $(".number li").index(this);
    showImg(index);
   }).eq(0).mouseover();  
   //滑入 停止动画，滑出开始动画.
   $('.banner').hover(function(){
       clearInterval(adTimer);
     },function(){
       adTimer = setInterval(function(){
          showImg(index)
        index++;
        if(index==len){index=0;}
        } , 2500);
   }).trigger("mouseleave");
})
 
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var sliderWidth = $(".banner").width();
    $(".show").stop(true,false).animate({left : -sliderWidth*index},1000);
    $(".number li").removeClass("onon")
      .eq(index).addClass("onon");


      $('.listimg').hover(function(){
    $(".summary",this).stop().animate({top:'250px'},180);
    $(".sum",this).stop().animate({top:'100px'},180);
    },function(){
      $(".summary",this).stop().animate({top:'300px'},180);
      $(".sum",this).stop().animate({top:'170px'},180);
      });
}

