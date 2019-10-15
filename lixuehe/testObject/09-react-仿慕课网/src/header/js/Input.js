import React, { Component } from 'react';
import '../css/input.css'
import $ from 'jquery'
import {header} from './constance'
//  Input 组件
class Input extends Component{
    constructor() {
        super();
        this.input = this.input.bind(this);
        this.show = this.show.bind(this);
        this.red = this.red.bind(this);
        this.hide = this.hide.bind(this);
    }
    // 输入框获取焦点
    input(){
        $("#input3 a").css("display","none");
        $("#input1").css({"border-bottom":"1px solid rgba(240,20,20,0.4)"});
        $("#input5").css({
            "border-radius": "18px",
            "background-color":"rgba(240,20,20,0.2)",
            "color":"rgba(240,20,20,0.4)"
        });
    }
    red(){
        $("#input5").css({
            "border-radius": "18px",
            "background-color":"rgba(240,20,20,0.2)",
            "color":"rgba(240,20,20,0.4)"
        });
    }
    // 标题栏输入框失去焦点是触发事件
    show(){
        $("#input3 a").show();
        $("#input5").css({
            "border": "0px",
            "background-color":"white",
            "color":"#757a7e"
        });
        $("#input1").css({"border-bottom":"1px solid #D9DDE1"});
    }
    hide(){
        $("#input5").css({
            "background-color":"#fff",
            "color":"#757a7e"
        });
    }
    render(){
        return(
            <div id="input">
                  {/* <!--下划线  --> */}
                <div id="input1">
                    <div id="input2">
                        <input id="input4" type="text" onFocus={this.input} onBlur={this.show}/>
                    </div>
                    {/* <!--java  --> */}
                    <div id="input3">
                        <a>{header.a1}</a>
                        <a>{header.a2}</a>                     
                    </div>  
                    <div id="input5" onMouseOver={this.red} onMouseOut={this.hide}> 
                         {/* <!-- 搜索图标 --> */}
                        <span className="glyphicon glyphicon-search"/>
                    </div>   
                </div>

            </div>
        )
    }
}
export default Input;