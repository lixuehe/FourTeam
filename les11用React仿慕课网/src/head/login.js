import React, { Component } from 'react';
import $ from 'jquery';
class Login extends Component{
// 下载app部分
    componentDidMount() {
        $(function () {
            $("#js-app-load").on("mouseover", function () {
                $(".js-load-box").show();
                $("#nav").addClass("addZ-indexCode");
            });
        })
        $(function () {
            $("#js-app-load").on("mouseout", function () {
                $(".js-load-box").hide();
                $("#nav").removeClass("addZ-indexCode")
            });
        })
        $(function () {
            $("#js-app-load").on("mouseout", function () {
                $(".js-load-box").hide();
                $("#nav").removeClass("addZ-indexCode");
            });
        })

// 购物车部分
        $(function () {
            $("#shop-cart").on("mouseover", function () {
                $(".my-cart").show();
                $("#nav").addClass("addZ-indexCode");
            });
        })
        $(function () {
            $("#shop-cart").on("mouseout", function () {
                $(".my-cart").hide();
                $("#nav").removeClass("addZ-indexCode");
            });
        })
    }

    render() {
        return(
            <div>
                <div id="login-area" >
                    <ul className="header-unlogin clearfix">
                        <li className="app-download" id="js-app-load">
                            <a href="https://www.imooc.com/mobile/app" target="_blank" style={{width:"60px"}}><span>下载APP</span></a>
                            <div className="app-load-box clearfix js-load-box" style={{display:"none"}}>
                                <div className="mobile-load-box">
                                    <h4>慕课网APP - 随时随地学编程</h4>
                                    <img src={require('./../images/appload.png')} className="l" alt="下载" />
                                        <div className="r">
                                            <a className="app-load-btn"
                                               href="https://itunes.apple.com/cn/app/mu-ke-wang/id722179140?mt=8"
                                               target="_blank">
                                                <img src={require('./../images/apple.png')} alt="App下载" />App Store下载
                                            </a>
                                            <a className="app-load-btn" href="https://www.imooc.com/mobile/appdown"
                                               target="_blank">
                                                <img src={require('./../images/android.png')} alt="Android下载" />Android下载
                                            </a>
                                            <p>扫描下载慕课网APP</p>
                                        </div>
                                </div>
                            </div>
                        </li>
                        <li className="shop-cart" id="shop-cart">
                            <a href="https://order.imooc.com/pay/cart" className="shop-cart-icon" target="_blank">
                                <span className="glyphicon glyphicon-shopping-cart"></span>
                                <span>购物车</span>
                            </a>
                            <div className="my-cart" id="my-cart" style={{display:"none"}}>
                                <div className="cart-title-box clearfix">
                                    <h2 className="l">我的购物车</h2>
                                    <h5 className="r">
                                        已加入
                                        <span className="js-incart-num">0</span>
                                        门课程
                                    </h5>
                                </div>
                                <div className="cart-wrap">
                                    <div className="clear-cart">
                                        <img src={require('./../images/android.png')} alt="Android下载" />
                                            <h3>购物车里空空如也</h3>
                                            <div className="text">快去这里选购你中意的课程</div>
                                            <p>
                                                <a className="go-link" href="https://coding.imooc.com/"
                                                   target="_blank">实战课程</a>
                                            </p>
                                            <p>
                                                <a className="go-link" href="https://class.imooc.com/"
                                                   target="_blank">就业班</a>
                                            </p>
                                    </div>
                                </div>
                                <div className="more-box clearfix">
                                    <div className="l show-box">
                                        <span className="text">
                                            <a href="https://order.imooc.com/myorder" target="_blank">我的订单中心</a>
                                        </span>
                                    </div>
                                    <a className="r moco-btn moco-btn-red go-cart" href="https://order.imooc.com/pay/cart"
                                       target="_blank">去购物</a>
                                </div>
                            </div>
                        </li>
                        <li className="header-signin">
                            <a href="https://www.imooc.com/user/newlogin" id="js-signin-btn">登录</a>
                            /
                            <a href="https://www.imooc.com/user/newsignup" id="js-signup-btn">注册</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Login;