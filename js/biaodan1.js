$(function(){
    $("form :input.required").each(function(){
        var $required=$("<strong class='high' style='color:red'>*</strong>");
        $(this).parent().append($required);
        })
    $("form: input").blur(function(){
      var $parent=$(this).parent();
      $parent.find(".formtips").remove();

      // 用户名
      if($(this).is('#username')){
        if(this.value==""||this.value.length<6){
          var errorMsg='请输入至少六位的用户名';
          $parent.append("<span class='formtips onError'>"+errorMsg+'</span>');
        }
        else{
          var okMsg='输入正确';
          $parent.append("<span class='formtips onSuccess'>"+okMsg+'</span>');
        }
      }

      // 密码
      if($(this).is('#password1')){
        if(this.value==""||this.value.length<10){
          var errorMsg='请输入至少10位的密码';
          $parent.append("<span class='formtips onError'>"+errorMsg+'</span>');
        }
        else{
          var okMsg='输入正确';
          $parent.append("<span class='formtips onSuccess'>"+okMsg+'</span>');
        }
      }
      // 确认密码
      if($(this).is('#password2')){
        if(this.value==""||this.value.length<10){
          var errorMsg='请输入至少10位的密码';
          $parent.append("<span class='formtips onError'>"+errorMsg+'</span>');
        }
        else{
          var okMsg='输入正确';
          $parent.append("<span class='formtips onSuccess'>"+okMsg+'</span>');
        }
      }

    }).keyup(function(){
      $(this).triggerHandler("blur");
    }).focus(function(){
      $(this).triggerHandler("blur");
    });

    $("#send").click(function(){
      $("form :input.required").trigger('blur');

      var numError=$('form.onError').length;
      if(numError)
     {
       
     }
    })  

      $("#send").click(function(){
        // 邮箱不能为空
      if($("#email1").val()=="")
      {
       alert("邮箱不能为空");
       return false;
      }
      var email=$("#email1").val();
      if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
      {
       alert("邮箱格式不正确！请重新输入");
       $("#email1").focus();
      }
      // 确认邮箱不能为空
      if($("#email2").val()=="")
      {
       alert("邮箱不能为空");
       return false;
      }
      var email=$("#email2").val();
      if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
      {
       alert("邮箱格式不正确！请重新输入");
       $("#email2").focus();
      }
      })  

 })

  function check()
{
    if (document.formes.username.value==""){
    alert("请输入登录账号!");
    return false;
    }
      if (document.formes.password1.value==""){
    alert("请输入登录密码!");
    return false;
    }
     if (document.formes.password2.value==""){
    alert("请输入确认密码!");
    return false;
    }
    if (document.formes.password1.value!=document.formes.password2.value){
    alert("对不起!确认密码不等于登录密码，请重新输入密码！");
    return false;
    }
    if (document.formes.email1.value!=document.formes.email2.value){
    alert("对不起!确认邮箱不等于登录邮箱，请重新输入邮箱！");
    return false;
    }
  return true; 
}
