 $(function(){
    $("#droplist_ul>li:not('#n0')").mouseover(function(){
        $(this).find("ul").show();
    })
    $("#droplist_ul>li:not('#n0')").mouseout(function(){
        $(this).find("ul").hide();
    })

     $("#n5").mouseover(function(){
        $(this).find("ul").show();
    })
    $("#n5").mouseout(function(){
        $(this).find("ul").hide();
    })

  })