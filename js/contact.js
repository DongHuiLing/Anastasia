$(function(){

    // contact us 1

    $(".chose>ul>li").mouseover(function(){

        if($(".chose>ul>li").className=="on")
        {
            return false;
        }
        $(".chose>ul>li").removeClass("on");
        $(this).addClass("on");
        $(".footer>p").show();
        var index=$(".chose>ul>li").index($(this));
        $(".main-content>div").hide();
        $(".main-content>div").eq(index).show();
    })

    //contact us 2

        $(".first>li").mouseover(function(){

        if($(".first>li").className=="underlines")
        {
            return false;
        }
        $(".first>li").removeClass("underlines");
        $(this).addClass("underlines");
        // $(".ul1").show();
        var index=$(".first>li").index($(this));
        $(".ul1").hide();
        $(".ul1").eq(index).show();
    })

   })