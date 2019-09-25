
window.onload = function () {
  $.ajax({
    url:"./some.txt",
    dataType:"text",
    success: function (data) {
      //alert(data);
      var array = data.split("/");
      for(var i=0 ; i<array.length; i++){
        //console.log(array[i]);
        var username = array[i].substring(array[i].indexOf("名")+2,array[i].indexOf("电"));
        var phone = array[i].substring(array[i].indexOf("话")+2,array[i].indexOf("密"));
        var pass = array[i].substring(array[i].indexOf("码")+2,array[i].indexOf("邮"));
        var email = array[i].substring(array[i].indexOf("箱")+2,array[i].indexOf("日"));
        var tar = array[i].substring(array[i].indexOf("期")+1);
        $(".table").append("<tr><td>"+username+"</td>"+"<td>"+phone+"</td>"+"<td>"+pass+"</td>"+"<td>"+email+"</td>"+"<td>"+tar+"</td></tr>");

        //console.log(username);
        //console.log(phone);
        //console.log(email);
        //console.log(tar);
      }
      //console.log("数组结束了");

    },
    error:function(error){
      console.log(error);
      alert("读取数据失败！");
    }
  });
  //alert("ajax调用结束");
}
