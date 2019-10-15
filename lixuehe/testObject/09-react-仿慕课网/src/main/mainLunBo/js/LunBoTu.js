import React, { Component } from 'react';
import "../css/lunBoTu.css";
import $ from "jquery"
// 整个页面的大组件
class LnnBoTu extends Component {
    constructor(){
        super();
        this.aShow1=this.aShow1.bind(this);
        this.aShow2=this.aShow2.bind(this);
        this.aHide1=this.aHide1.bind(this);
        this.aHide2=this.aHide2.bind(this);
    }

    //轮播图的左右按钮显示隐藏背景
    aShow1(){
        $(".carousel-control.left").css({"background":"black","opacity":"0.5"});
    }
    aShow2(){
        $(".carousel-control.right").css({"background":"black","opacity":"0.5"});
    }
    aHide1(){
        $(".carousel-control.left").css({"background":"none"});
    }
    aHide2(){
        $(".carousel-control.right").css({"background":"none"});
    }
  render() {
    return (
        <div id="lunboTu">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
                {/* <!-- 轮播（Carousel）指标 --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>   
                {/* <!-- 轮播（Carousel）项目 --> */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={require("../imgs/lunbo0.png")} alt="First slide"/>
                    </div>
                    <div className="item">
                        <img src={require("../imgs/lunbo1.png")} alt="Second slide"/>
                    </div>
                    <div className="item">
                        <img src={require("../imgs/lunbo2.png")}  alt="Third slide"/>
                    </div>
                    <div className="item">
                        <img src={require("../imgs/lunbo3.png")}  alt="Fourth slide"/>
                    </div>
                    <div className="item">
                        <img src={require("../imgs/lunbo4.png")}  alt="Fifth slide"/>
                    </div>
                    <div className="item">
                        <img src={require("../imgs/lunbo5.png")}  alt="Sixth slide"/>
                    </div>
                </div>
                {/* <!-- 轮播（Carousel）导航 --> */}
                <a className="left carousel-control" onMouseOver={this.aShow1} onMouseOut={this.aHide1} href="#myCarousel" role="button" data-slide="prev">
                    <span>&lt;</span>
                </a>
                <a className="right carousel-control" onMouseOver={this.aShow2} onMouseOut={this.aHide2} href="#myCarousel" role="button" data-slide="next">
                    <span>&gt;</span>
                </a>
            </div>  
        </div> 
    );
  }
}
export default LnnBoTu;