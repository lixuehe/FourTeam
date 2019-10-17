//自增函数，标识id，开始为0
var messageId = 0;
//当前div的id
var currentDivId = 0;
// 时间戳转时间函数
function timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}
// 获取当前时间
function currentTime(){
    var date = (Date.parse(new Date()) / 1000);
    return date;
}
$(function(){
    requestServer();
    // 提交留言按钮函数
    $("#submit").click(function(){
        var data = {};
        data["name"] = $("#inputNameTag").val();
        data["content"] = $("#submitMessageTag").val();
        data["time"] = currentTime().toString();
        if(data["name"].length===0){
            alert("姓名不能为空！");
            return false;
        }
        if(data["content"].length===0){
            alert("内容不能为空！");
            return false;}
        // ajax post发送json数据
        $.ajax({
            type: "POST",
            url: "/text.json",
            contentType: "application/json;charset=utf-8",
            dataType:"json",
            data:JSON.stringify(data),
            success:function(){
                console.log("提交成功");
                // alert("留言成功！");
                // 请求成功时加载最新一条的数据,并清空输入框
                requestServerNew()
                $("#inputNameTag").val("");
                $("#submitMessageTag").val("");
            },
            error:function(){
                console.log("提交失败");
            }
        })
    })
    // 删除留言的函数
    $("body").on("click",".deleteMessage",function(event){
        $.ajax({
            type: "POST",
            url: "/text.json",
            contentType: "application/text;charset=utf-8",
            data:event.currentTarget.id,
            success:function(){
                currentDivId = event.currentTarget.id;
                // 这里 要想办法重新渲染dom（或者直接删除那个dom）
                $("#div"+currentDivId).remove();
                console.log("删除成功,id为："+event.currentTarget.id);
            },
            error:function(){
                console.log("删除失败");
            }
        })
    });
    // 点击回复 函数
    $("body").on("click",".replyMessage",function(event){
        // console.log(event.currentTarget.id);
        // 点击，使用toggle函数实现隐藏和显示。
        $(".replyArea"+event.currentTarget.id).toggle();
    })
    // 点击确认 函数
    $("body").on("click",".confirmButton", function(event){
        console.log("你点击了第"+event.currentTarget.id+"个确认按钮");
        var data = {};
        data["replyName"] = $(".replyName"+event.currentTarget.id);
        data["replyContent"] = $(".replyContent"+event.currentTarget.id);
        console.log(data.replyName[0].value);
        console.log(data.replyContent[0].value);
 /*        $.ajax({
            type: "POST",
            url: "/text.json",
            contentType: "application/json;charset=utf-8",
            dataType:"json",
            data:JSON.stringify(data),
        })*/
    })
    // 请求服务端，并把结果输出到dom,加载全部的数据
    function requestServer(){
        // 将请求到的json字符串转换为json对象，并循环输出到dom上。
        var messageData;
        $.get("/text.json",function(data){
            messageData = jQuery.parseJSON(data);
            // console.log(messageData);
            for(let i=0; i<messageData.message.length;i++){
                let messageName = messageData.message[i].name;
                let messageContent = messageData.message[i].content;
                let messageTime = timestampToTime(messageData.message[i].time);
                //使用es6模板字符串，省去一大部分操作。
                $("#messageContent").append(`<div id="div${messageId}">
                                姓名: ${messageName}<br>内容: ${messageContent}<br>时间: ${messageTime}<br>
                                <button class="replyMessage" id="${messageId}">回复</button>
                                <button class="deleteMessage" id="${messageId}">删除</button>
                                <div class="replyArea${messageId}" style="display:none">
                                <input type="text" class="replyName${messageId}"/><br>
                                <textarea cols="25" rows="5" class="replyContent${messageId}"></textarea>
                                <button class="confirmButton" id="${messageId}">确认</button></div>
                                <br><br><br>
                            </div>`);
                messageId++;//每生成一个留言。id自增1，给留言标序
            }
        });
    }
    // 请求服务端，（获取最新数据），然后渲染到页面上。
    function requestServerNew(){
        var messageData;
        $.get("./text.json",function(data){
            messageData = $.parseJSON(data);
            // console.log(messageData.message);
            // 获取最新的值
            var newValue = messageData.message.length-1;
            console.log(messageData.message[newValue]);
            let messageName = messageData.message[newValue].name;
            let messageContent = messageData.message[newValue].content;
            let messageTime = timestampToTime(messageData.message[newValue].time);
            $("#messageContent").append(`<div id="div${messageId}">
                            姓名: ${messageName}<br>内容: ${messageContent}<br>时间: ${messageTime}<br>
                            <button class="replyMessage" id="${messageId}">回复</button>
                            <button class="deleteMessage" id="${messageId}">删除</button>
                            <div class="replyArea${messageId}"  style="display:none">
                            <input type="text" class="replyName${messageId}"><br>
                            <textarea cols="30" rows="5" class="replyContent${messageId}"></textarea>
                            <button class="confirmButton" id="${messageId}">确认</button></div>
                            <br><br><br>
                        </div>`);
            messageId++;//每生成一个留言。id自增1，给留言标序
        })
    }
})