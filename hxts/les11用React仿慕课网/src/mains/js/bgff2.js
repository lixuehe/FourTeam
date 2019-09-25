import React, { Component } from 'react';
import '../css/shizhan.css';
import '../css/shangke.css';
import '../css/rumen.css';
import $ from 'jquery';
import Shizhan from "./shizhan";

class Bgff2 extends Component{
    componentDidMount() {
        //实战推荐
        //第1个
        $(function () {
            $(".cc11").on("mouseover",function () {
                $(".cc21").css("color","red")
            });
            $(".cc11").on("mouseout",function () {
                $(".cc21").css("color","#07111B")
            });
            $(".cc12").on("mouseover",function () {
                $(".cc22").css("color","red")
            });
            $(".cc12").on("mouseout",function () {
                $(".cc22").css("color","#07111B")
            });
            $(".cc13").on("mouseover",function () {
                $(".cc23").css("color","red")
            });
            $(".cc13").on("mouseout",function () {
                $(".cc23").css("color","#07111B")
            });
            $(".cc14").on("mouseover",function () {
                $(".cc24").css("color","red")
            });
            $(".cc14").on("mouseout",function () {
                $(".cc24").css("color","#07111B")
            });
            $(".cc15").on("mouseover",function () {
                $(".cc25").css("color","red")
            });
            $(".cc15").on("mouseout",function () {
                $(".cc25").css("color","#07111B")
            });
        })
    }

    render() {
        return(
            <div className={this.props.item.name}>
                {this.props.item.zhenhe.map(item => <Shizhan item={item}/>)}
            </div>
        )
    }
}
export default Bgff2;