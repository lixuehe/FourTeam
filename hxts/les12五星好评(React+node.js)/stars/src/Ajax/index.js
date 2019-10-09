
import $ from 'jquery'
function ajax(url,type,params,success){
    $.ajax({
        url:url,
        type:type,
        data:params,
        async:false,
        dataType:'text',
        success:success,
        error:function (index) {
            index = -1;
            alert("网络请求失败！");
        }
    })
}


export default ajax;