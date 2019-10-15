// // 标题栏输入框获取焦点是触发事件
// function input(){
//     $("#input3 a").css("display","none");
//     $("#input1").css({"border-bottom":"1px solid rgba(240,20,20,0.4)"});
//     $("#input5").css({
//         "border-radius": "18px",
//         "background-color":"rgba(240,20,20,0.2)",
//         "color":"rgba(240,20,20,0.4)"
//     });
// }
// function red(){
//     $("#input5").css({
//         "border-radius": "18px",
//         "background-color":"rgba(240,20,20,0.2)",
//         "color":"rgba(240,20,20,0.4)"
//     });
// }
// // 标题栏输入框失去焦点是触发事件
// function show(){
//     $("#input3 a").show();
//     $("#input5").css({
//         "border": "0px",
//         "background-color":"white",
//         "color":"#757a7e"
//     });
//     $("#input1").css({"border-bottom":"1px solid #D9DDE1"});
// }
// 鼠标移入下载app,显示与隐藏div
// function appShow(){
//     $("#app1").show();
//     $("#car2").hide();
// }
// function appHide(){
//     $("#app1").hide();
// }
// //点击购物车,隐藏即显示div
// function carShow(){
//     $("#car2").show();
//     $("#app1").hide();
// }
// function carHide(){
//     $("#car2").hide();
// }
// 点击微信图标,显示与隐藏div及微信图标颜色改变
function weiXinShow(){
    $("#weixin3").show();
    $("#weixin img").attr("src","imgs/weixin2.png");
}
function weiXinHide(){
    $("#weixin3").hide();
    $("#weixin img").attr("src","imgs/weixin1.png");
}
// 点击微博图标,微博图标颜色改变
function weiBoShow(){
    $("#weibo img").attr("src","imgs/weibo2.png");
}
function weiBoHide(){
    $("#weibo img").attr("src","imgs/weibo1.png");
}
//轮播图的左右按钮显示隐藏背景
function aShow1(){
    $(".carousel-control.left").css({"background":"black","opacity":"0.5"});
}
function aShow2(){
    $(".carousel-control.right").css({"background":"black","opacity":"0.5"});
}
function aHide1(){
    $(".carousel-control.left").css({"background":"none"});
}
function aHide2(){
    $(".carousel-control.right").css({"background":"none"});
}
// 当鼠标移入钱数那一行，小圆点变红；
function redShow(){
    $(".red").css("color","red");    
}
function redHide(){
    $(".red").css("color","#4D555D");
}
// 鼠标移入侧栏显示对应的div
function lunboLanHideShow(){
    $(".lunboLanHide0").show();
}
function lunboLanHideHide(){
    $(".lunboLanHide0").hide();
}
function lunboLanHideShow1(){
    $(".lunboLanHide1").show();
}
function lunboLanHideHide1(){
    $(".lunboLanHide1").hide();
}
function lunboLanHideShow2(){
    $(".lunboLanHide2").show();
}
function lunboLanHideHide2(){
    $(".lunboLanHide2").hide();
}
function lunboLanHideShow3(){
    $(".lunboLanHide3").show();
}
function lunboLanHideHide3(){
    $(".lunboLanHide3").hide();
}
function lunboLanHideShow4(){
    $(".lunboLanHide4").show();
}
function lunboLanHideHide4(){
    $(".lunboLanHide4").hide();
}
function lunboLanHideShow5(){
    $(".lunboLanHide5").show();
}
function lunboLanHideHide5(){
    $(".lunboLanHide5").hide();
}
function lunboLanHideShow6(){
    $(".lunboLanHide6").show();
}
function lunboLanHideHide6(){
    $(".lunboLanHide6").hide(); 
}
// 鼠标滑动到一定地步出现回到顶部
  $(function(){
        $(window).scroll(function() {
            var s = $(window).scrollTop();
            if(s>800){
                $(".back").show();
                $("#ce").css("height","340")
            }else{
                $(".back").hide();
                $("#ce").css("height","285")
        }   
     });
});

// 回到顶部加一个滑动效果
 $(function(){
       $("#back").click(function() {
        let time=setInterval(function(){
            let top=document.documentElement.scrollTop;
            if(top===0)
                clearInterval(time);
            else window.scrollTo(0,top-200);
            },20);
        })
                
    });