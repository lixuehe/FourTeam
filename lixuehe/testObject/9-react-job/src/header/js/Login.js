import React, { Component } from 'react';
import '../css/login.css'
import $ from 'jquery'
//  Login 组件
const app={
    title:"下载APP",
    h4:"慕课网APP - 随时随地学编程",
    span1:"App Store下载",
    span2:"Android下载",
    p:"扫描下载慕课网APP"
}
const car={
    title:"购物车",
    span1:"我的购物车",
    span2:"已加入0门课程",
    p1:"购物车里空空如也",
    p2:"快去这里选购你中意的课程",
    p3:"实战课程",
    p4:'就业班',
    span3:"我的订单中心",
    span4:"购物车"
}
const login={
    a1:"登录",
    a2:"注册"  
}
class Login extends Component{
    constructor() {
        super();
        this.appShow = this.appShow.bind(this);
        this.appHide = this.appHide.bind(this);
        this.carShow = this.carShow.bind(this);
        this.carHide = this.carHide.bind(this);
    }
    // 鼠标移入下载app,显示与隐藏div
    appShow(){
        $("#app1").show();
        $("#car2").hide();
    }
    appHide(){
        $("#app1").hide();
    }
    //点击购物车,隐藏即显示div
    carShow(){
        $("#car2").show();
        $("#app1").hide();
    }
    carHide(){
        $("#car2").hide();
    }
    render(){
        return(
            // <!-- 标题栏右侧四个超链接 -->      
            <ul id="login">
                <li id="login1">
                    <a id="app" onMouseOver={this.appShow}>{app.title}</a>
                       <div id="app1" onMouseOver={this.appShow} onMouseOut={this.appHide} style={{display:"none"}}>
                       
                        <div>
                            <h4>{app.h4}</h4>  
                            <img src={require("../imgs/ma.png")}/>
                        </div>
                        <div id="app2">
                            <a><img src={require("../imgs/icon_apple.png")}/><span>{app.span1}</span></a>
                            <a><img src={require("../imgs/icon_andriod.png")}/><span>{app.span2}</span></a>
                            <p>{app.p}</p>
                        </div>  
                     </div>          
                </li>
                <li id="login2">
                    <a id="car1" onMouseOver={this.carShow} ><span className="glyphicon glyphicon-shopping-cart"></span> {car.title}</a>
                    <div id="car2"  onMouseOver={this.carShow}  style={{display:"none"}} onMouseOut={this.carHide}>
                        <div id="car3">
                            <span id="span1">{car.span1}</span>
                            <span id="span2">{car.span2}</span>
                        </div>
                        <div id="car4">
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                            <p>{car.p1}</p>
                            <p>{car.p2}</p>
                            <p>{car.p3}</p>
                            <p>{car.p4}</p>
                        </div>
                        <div id="car5">
                            <span id="span3">{car.span3}</span>
                            <span id="span4">{car.span4}</span>
                        </div>                     
                    </div>
                </li>
                <li id="login3">
                    <a onMouseOver={this.carHide}>{login.a1}</a>
                    <span>/</span>
                    <a>{login.a2}</a>
                </li>
            </ul> 
        )
    }
}
export default Login;