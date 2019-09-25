import React, { Component } from 'react';
import '../css/FooterLeft.css'
const last1List=[
    '企业合作',
    '人才招聘',
    '联系我们',
    '讲师招募',
    '帮助中心',
    '意见反馈',
    '慕课大学',
    '代码托管',
    '友情链接'
]
const p=" 2019 imooc.com  京ICP备 12003892号-11 北京奥鹏文化传媒有限公司";
//  Ul组件
class FooterLeft extends Component{
    render(){
        return(
            <div  id="footer3">
                <div id="last1">
                   {last1List.map(item=>
                    <a>{item}</a>
                    )}
                </div>
                <div id="last2">
                    <p><img className="a9" src={require("../imgs/a9.png")}/>{p}</p>
                </div>
            </div>
        
        )
    }
}
export default FooterLeft;