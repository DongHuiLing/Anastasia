$(function() {
   var width=$(".banner").width();//获取焦点图的宽度（显示面积）
   var len=$("#.banner>ul").find("li").length;//获取焦点图个数
   var index=0;
   var Timer;
 
  var btn="<div class='preNext pre'></div><div class='preNext next'></div>";
  $(".banner").append(btn);

 	
 
//   //上一页、下一页按钮透明度处理
  $(".preNext").css("opacity",1).hover(function(){
  	$(this).stop(true,false).animate({"opacity":"0.8"},500);
  },function(){
  	$(this).stop(true,false).animate({"opacity":"1"},500);
  });

//   //上一页按钮
  $(".banner .pre").click(function(){
  	index-=1;
  	if(index==-1)
  	{
  		index=len-1;
  	}
  	showPics(index);
  });

//   //下一页按钮
  $(".banner .next").click(function(){
  	index+=1;
  	if(index==len)
  	{
  		index=0;
  	}
  	showPics(index);
  });

//   //图片为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
  $(".banner>ul").css("width",width*(len));
  
//   //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
  $(".banner").hover(function(){
  	clearInterval(Timer); 
  	//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。会不停地调用函数
  },function(){
  	Timer=setInterval(function(){
  		showPics(index);
  		index++;
  		if(index==len)
  		{
  			index=0;
  		}
  	},3000)
  }).trigger("mouseleave");
 
	
  
  function showPics(index){
   //显示图片函数，根据接收的index值显示相应的内容

	var Turnleft=-index*width;//根据index值计算ul元素的left值
	$(".banner ul").stop(true,false).animate({"left":Turnleft},500);
  }

});
