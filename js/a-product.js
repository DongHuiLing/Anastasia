$(function() {
   var $div_li1 =$("#small>li");
      $div_li1.click(function(){
      $(this).addClass("selected")
    .siblings().removeClass("selected");  
    
            var index1 = $(this).index();  
      $("#big>li")     
     .eq(index1).show()   
     .siblings().hide();
    })
     var num=1;
     function number()
     {
        var money;
        var number=$("#number>input").val();
       $("#jia").click(function(){
            number++;
            $("#number>input").val(number);
            num=$("#number>input").val();
       })

       $("#jian").click(function(){
        if(number>1)
        {
           number--;
           $("#number>input").val(number);
           num=$("#number>input").val();
        }

       })
         $(".buy").click(function(){
            money=$(".money>span").text();
            var hs=$("#xshs").text();
            var name=$(".content>h1").text();
            confirm("商品名称："+name+"\n"+"尺寸："+hs+"\n"+"总价为"+money*num+"元");
            })
     }
     number();

    

});
