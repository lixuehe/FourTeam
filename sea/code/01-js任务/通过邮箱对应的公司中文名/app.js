//'use strict'
var request = require('request');

//邮件函数
function mailHandle(maliStr){
     var mailUser = maliStr.lastIndexOf("@");
     if(mailUser !== -1) {
        console.log("此邮箱的用户名是: " + maliStr.substring(0,mailUser));
        // 取出@后面的内容,然后赋给companyUrl
        companyUrl = maliStr.substring(mailUser+1,maliStr.length);
        console.log("此邮箱的公司域名是: " + companyUrl);
        getCompany(companyUrl);
    } 
};

function getCompany(companyUrl){
    // 站长工具的免费备案查域接口
    var url = "http://apidata.chinaz.com/CallAPI/NewDomain?key=6952cb28dae441328871f1a1c4efdb8f&domainName="+ companyUrl;
    //console.log(url);
    request(url, function (error, response, body) {
        // 将json字符串转换为对象
        var json1 = JSON.parse(body);
        if (json1.Result != null) {
            console.log("此邮箱的公司名是: " + json1.Result.CompanyName);
        } else {
            console.log("此公司不存在!");
        }
        if (error){
            console.log(error);
        }
    })
}
//mailHandle("758866123123@tom.com");
//request(options, getCompany);
module.exports = mailHandle;