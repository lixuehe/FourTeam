import React, { Component } from 'react';
import '../css/login.css'
import $ from 'jquery'
import {header} from './constance'
//  Login 组件
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
                    <a id="app" onMouseOver={this.appShow}>{header.app.title}</a>
                       <div id="app1" onMouseOver={this.appShow} onMouseOut={this.appHide} style={{display:"none"}}>
                       
                        <div>
                            <h4>{header.app.h4}</h4>  
                            <img src={require("../imgs/ma.png")}/>
                        </div>
                        <div id="app2">
                            <a><img src={require("../imgs/icon_apple.png")}/><span>{header.app.span1}</span></a>
                            <a><img src={require("../imgs/icon_andriod.png")}/><span>{header.app.span2}</span></a>
                            <p>{header.app.p}</p>
                        </div>  
                     </div>          
                </li>
                <li id="login2">
                    <a id="car1" onMouseOver={this.carShow} ><span className="glyphicon glyphicon-shopping-cart"></span> {header.car.title}</a>
                    <div id="car2"  onMouseOver={this.carShow}  style={{display:"none"}} onMouseOut={this.carHide}>
                        <div id="car3">
                            <span id="span1">{header.car.span1}</span>
                            <span id="span2">{header.car.span2}</span>
                        </div>
                        <div id="car4">
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                            <p>{header.car.p1}</p>
                            <p>{header.car.p2}</p>
                            <p>{header.car.p3}</p>
                            <p>{header.car.p4}</p>
                        </div>
                        <div id="car5">
                            <span id="span3">{header.car.span3}</span>
                            <span id="span4">{header.car.span4}</span>
                        </div>                     
                    </div>
                </li>
                <li id="login3">
                    <a onMouseOver={this.carHide}>{header.login.a1}</a>
                    <span>/</span>
                    <a>{header.login.a2}</a>
                </li>
            </ul> 
        )
    }
}
export default Login;