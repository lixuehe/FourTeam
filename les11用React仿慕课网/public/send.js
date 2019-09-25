// $(function () {
//     alert("11");
//     $("#back").click(function () {
//         alert("222")
//         let time = setInterval(function () {
//             let top = document.documentElement.scrollTop;
//             if(top === 0){
//                 clearInterval(time);
//             }else{
//                 window.scrollTo(0,top-100)
//             }
//         },10)
//     });
// });

// 头部的输入框
$(function () {
    $("input").focus(function () {
        $(".searchTages").addClass("hide");
        $(".search-area").css("border-bottom","1px solid red")
        $(".showhide-search").css("background-color","red");
    });
    $("input").blur(function () {
        $(".searchTages").removeClass("hide");
        $(".search-area").css("border-bottom","1px solid #d9dde1")
        $(".showhide-search").css("background-color","white")
    })
})

// 全明星模块
$(function () {
    $(".im1").on("mouseover", function () {
        $(".ab1").removeClass("hide");
    });
    $(".im1").on("mouseout", function () {
        $(".ab1").addClass("hide");
    });
    $(".im2").on("mouseover", function () {
        $(".ab2").removeClass("hide");
    });
    $(".im2").on("mouseout", function () {
        $(".ab2").addClass("hide");
    });
    $(".im3").on("mouseover", function () {
        $(".ab3").removeClass("hide");
    });
    $(".im3").on("mouseout", function () {
        $(".ab3").addClass("hide");
    });
    $(".im4").on("mouseover", function () {
        $(".ab4").removeClass("hide");
    });
    $(".im4").on("mouseout", function () {
        $(".ab4").addClass("hide");
    });
    $(".im5").on("mouseover", function () {
        $(".ab5").removeClass("hide");
    });
    $(".im5").on("mouseout", function () {
        $(".ab5").addClass("hide");
    });
    $(".im6").on("mouseover", function () {
        $(".ab6").removeClass("hide");
    });
    $(".im6").on("mouseout", function () {
        $(".ab6").addClass("hide");
    });
    $(".im7").on("mouseover", function () {
        $(".ab7").removeClass("hide");
    });
    $(".im7").on("mouseout", function () {
        $(".ab7").addClass("hide");
    });
    $(".im8").on("mouseover", function () {
        $(".ab8").removeClass("hide");
    });
    $(".im8").on("mouseout", function () {
        $(".ab8").addClass("hide");
    });
    $(".im9").on("mouseover", function () {
        $(".ab9").removeClass("hide");
    });
    $(".im9").on("mouseout", function () {
        $(".ab9").addClass("hide");
    });
    $(".im10").on("mouseover", function () {
        $(".ab10").removeClass("hide");
    });
    $(".im10").on("mouseout", function () {
        $(".ab10").addClass("hide");
    });
    $(".im11").on("mouseover", function () {
        $(".ab11").removeClass("hide");
    });
    $(".im11").on("mouseout", function () {
        $(".ab11").addClass("hide");
    });
    $(".im12").on("mouseover", function () {
        $(".ab12").removeClass("hide");
    });
    $(".im12").on("mouseout", function () {
        $(".ab12").addClass("hide");
    });
    $(".im13").on("mouseover", function () {
        $(".ab13").removeClass("hide");
    });
    $(".im13").on("mouseout", function () {
        $(".ab13").addClass("hide");
    });
    $(".im14").on("mouseover", function () {
        $(".ab14").removeClass("hide");
    });
    $(".im14").on("mouseout", function () {
        $(".ab14").addClass("hide");
    });
});

// 右侧弹窗
$(function () {
    // 意见反馈
    $(".elevator-msg").on("mouseover", function () {
        $(".yijian").removeClass("hide");
        $(".icon-feedback").addClass("hide");
    });
    $(".elevator-msg").on("mouseout", function () {
        $(".yijian").addClass("hide");
        $(".icon-feedback").removeClass("hide");
    });
    $(".elevator-dist").on("mouseover", function () {
        $(".yaoqing").removeClass("hide");
        $(".icon-yq").addClass("hide");
    });
    $(".elevator-dist").on("mouseout", function () {
        $(".yaoqing").addClass("hide");
        $(".icon-yq").removeClass("hide");
    });
    $(".elevator-faq").on("mouseover", function () {
        $(".bangzhu").removeClass("hide");
        $(".icon-ques").addClass("hide");
    });
    $(".elevator-faq").on("mouseout", function () {
        $(".bangzhu").addClass("hide");
        $(".icon-ques").removeClass("hide");
    });
    $(".elevator-app").on("mouseover", function () {
        $(".xiazai").removeClass("hide");
        $(".elevator-app-box").removeClass("hide");
        $(".icon-appdownload").addClass("hide");
    });
    $(".elevator-app").on("mouseout", function () {
        $(".xiazai").addClass("hide");
        $(".elevator-app-box").addClass("hide");
        $(".icon-appdownload").removeClass("hide");
    });
    $(".elevator-weixin").on("mouseover", function () {
        $(".guanfang").removeClass("hide");
        $(".elevator-weixin-box").removeClass("hide");
        $(".icon-wxgzh").addClass("hide");
    });
    $(".elevator-weixin").on("mouseout", function () {
        $(".guanfang").addClass("hide");
        $(".elevator-weixin-box").addClass("hide");
        $(".icon-wxgzh").removeClass("hide");
    });
});

