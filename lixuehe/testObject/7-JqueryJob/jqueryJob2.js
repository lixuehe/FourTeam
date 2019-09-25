//点击显示所有用户触发事件
window.onload=function(){
    $.ajax({
        url:"jqueryJob.txt",
        dataType:"text",
        success: function (data) {
            //接收数据成功后,将数据放在前台页面的表格内; 
            //首先进行字符串分割:
            var arr=data.split("/");
            for(var i=0;i<arr.length-1;i++){
                //将数据进行拆分
                var indexName=arr[i].indexOf("name")+5;//名字的第一个字符的下标
                var indexPass=arr[i].indexOf("pass");  //pass的第一个字符p的下标
                var indexDate=arr[i].indexOf("date"); //
                var name=arr[i].slice(indexName,indexPass-1);//获取到的名字
                var pass=arr[i].slice(indexPass+5,indexDate-1);//获取到的密码
                var date=arr[i].slice(indexDate+5);                
                $(".table").append("<tr><td>"+name+"</td><td>"+pass+"</td><td>"+date+"</td></tr>");
                $(".table").show();  
            }           
        },
        error:function(error){
            console.log(error);                     
            alert("暂无数据!");
        }
    });

}