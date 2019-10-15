//点击提交按钮,触发事件
function fun(){
    var name=$("#name").val();
    var pass1=$("#pass1").val();
    var pass2=$("#pass2").val();
    var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth();
        var day=date.getDate();
        var hour=date.getHours();
        var min=date.getMinutes();
        var sec=date.getSeconds();
    date=year+"年"+month+"月"+day+"日"+hour+":"+min+":"+sec;
    //用户名的非空验证
    if(name!=""){
        if(pass2!=pass1){
            alert("两次密码不一致,请重新输入!");
            return;
        }
        //如果账户和密码都通过,就将数据写入文件        
        //将数据以ajax形式发送给nodejs      
        else{
            $.ajax({
                url:"http://127.0.0.1:2222/",
                dataType:"text",
                data:"name:"+name+",pass:"+pass1+",date:"+date+"/",
                type:"post",
                success: function (data) {
                    alert(data);
                    window.open("jqueryJob2.html");
                },
                error:function(error){
                    console.log(error);                  
                    alert("不好意思,注册失败!");
                }
            });
        } 
    }
    else{
        alert("用户名不能为空,请输入用户名!");
    }
}







