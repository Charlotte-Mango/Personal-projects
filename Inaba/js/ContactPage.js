
$(document).ready(function()
{  
    // 文本输入框失去焦点时
    $(".baseinfomust").blur(function()
    {
       if($(this).val()==null || $(this).val()=="")
       {
          $(this).val("请输入");
          $(this).css("color","red");
       }
    });

    // 文本输入框获取焦点时
    $(".baseinfomust").focus(function()
    {
        if($(this).val()=="请输入")
        {
            $(this).val("");
            $(this).css("color","#555555");
        }
    });

     // 文本输入框失去焦点时
     $(".text").blur(function()
     {
        if($(this).val()==null || $(this).val()=="")
        {
           $(this).val("请输入");
           $(this).css("color","red");
        }
     });

     // 文本输入框获取焦点时
    $(".text").focus(function()
    {
        if($(this).val()=="请输入")
        {
            $(this).val("");
            $(this).css("color","#555555");
        }
    });

});
