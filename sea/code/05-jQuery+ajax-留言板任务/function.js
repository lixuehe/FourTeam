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
            $("#alertArea").show();
            return false;
        }
        if(data["content"].length===0){
            $("#alertArea").show();
            return false;
        }
        // 如果上面的条件都满足了，则隐藏提示。请求ajax。
        $("#alertArea").hide();
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
                //删除黑框（bootstrap模态框的遮罩）
                $(".modal-backdrop").remove();
                $("body").removeClass('modal-open');
                console.log("删除成功,id为："+event.currentTarget.id);
            },
            error:function(){
                console.log("删除失败");
            }
        })
    });
    $(".closeWarning").click(function(){
        $("#alertArea").hide();
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
                $("#messageContent").append(`
                    <div id="div${messageId}" class="panel panel-default">
                       <div class="panel-body">
                            <strong>${messageName} </strong><span class="glyphicon glyphicon-fire" style="top:2px"></span>
                            <hr>
                            <p>${messageContent}</p>
                            <span style="color:rgba(0, 0, 0, 0.4);">${messageTime}</span>
                            <hr>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success">
                                    <span class="glyphicon glyphicon-thumbs-up" style="top:2px;"></span> 点赞
                                </button>
                                <button type="button" class="btn btn-primary">
                                    <span class="glyphicon glyphicon-comment" style="top:2px;"></span> 举报
                                </button>
                            </div>
                            <button class="btn btn-warning pull-right" id="${messageId}" data-toggle="modal" data-target="#myModal${messageId}">
                                <span class="glyphicon glyphicon-trash" style="top:2px"></span> 删除
                            </button>
                            
                            <div class="modal fade" id="myModal${messageId}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title" id="myModalLabel">确认框</h4>
                                        </div>
                                        <div class="modal-body">您确定删除这条留言吗？</div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
                                            <button type="button" class="btn btn-danger deleteMessage" id="${messageId}">删除</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
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
            $("#messageContent").append(`
                <div id="div${messageId}" class="panel panel-default">
                    <div class="panel-body">
                        <strong>${messageName} </strong><span class="glyphicon glyphicon-fire" style="top:2px"></span>
                        <hr>
                        <p>${messageContent}</p>
                        <span style="color:rgba(0, 0, 0, 0.4);">${messageTime}</span>
                        <hr>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success">
                                    <span class="glyphicon glyphicon-thumbs-up" style="top:2px;"></span> 点赞
                                </button>
                                <button type="button" class="btn btn-primary">
                                    <span class="glyphicon glyphicon-comment" style="top:2px;"></span> 举报
                                </button>
                            </div>
                            <button class="btn btn-warning pull-right" id="${messageId}" data-toggle="modal" data-target="#myModal${messageId}">
                                <span class="glyphicon glyphicon-trash" style="top:2px"></span> 删除
                            </button>
                            
                            <div class="modal fade" id="myModal${messageId}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title" id="myModalLabel">确认框</h4>
                                        </div>
                                        <div class="modal-body">您确定删除这条留言吗？</div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
                                            <button type="button" class="btn btn-danger deleteMessage" id="${messageId}">删除</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>`);
            messageId++;//每生成一个留言。id自增1，给留言标序
        })
    }
})