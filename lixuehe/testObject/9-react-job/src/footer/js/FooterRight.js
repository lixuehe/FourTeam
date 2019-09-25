import React, { Component } from 'react';
import '../css/FooterRight.css';
import $ from 'jquery';

const footer2List=[
    '官方公众号',
    '官方微博'
]
//  Ul组件
class FooterLeft extends Component{
    constructor() {
        super();
        this.weiXinShow = this.weiXinShow.bind(this);
        this.weiXinHide = this.weiXinHide.bind(this);
        this.weiBoShow = this.weiBoShow.bind(this);
        this.weiBoHide = this.weiBoHide.bind(this);
    } 
    weiXinShow(){
        $("#weiXin3").show();
        $("#weiXin img").attr("src",'/imgs/weiXin2.png');
    }
    weiXinHide(){
        $("#weiXin3").hide();
        $("#weiXin img").attr("src",'/imgs/weiXin1.png');
    }
    // 点击微博图标,微博图标颜色改变
    weiBoShow(){
        $("#weiBo img").attr("src", '/imgs/weiBo2.png');
    }
    weiBoHide(){
        $("#weiBo img").attr("src",'/imgs/weiBo1.png');
    }

    render(){
        return(
            <div id="footer2">
                <div id="weiXin3">
                    <img src={require("../imgs/ma1.jpg")}/>
                    <img src={require("../imgs/ma2.jpg")}/>
                </div>
                <div id="weiXin" onMouseOver={this.weiXinShow} onMouseOut={this.weiXinHide}>
                    <a><img src={require("../imgs/weiXin1.png")} title="微信"/></a>
                    <p>{footer2List[0]}</p>
                </div>
                <div id="weiBo" onMouseOver={this.weiBoShow} onMouseOut={this.weiBoHide}>
                    <a><img src={require('../imgs/weiBo1.png')}　title="新浪微博"/></a>
                    <p>{footer2List[1]}</p>
                </div>
            </div>      
        )
    }
}
export default FooterLeft;