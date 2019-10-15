import React, { Component } from 'react';
import './ShiZhan.css'
import MainDiv3 from '../mainDiv3';
const title="实/战/推/荐";
const id='sz';
const XinShouList2=[
  {
    xinKe:"新课",
    img:'/shi5.png',
    touMing1:'java',
    p1:"一站式学习Java网络编程 全面理解BIO/NIO/AIO",
    span1:'实战',
    span2:'初级',
    span3:'43',
    span4:'￥265.00',
    span5:'￥299.00',
    span6:'限时优惠'
  },
  {
    xinKe:"新课",
    img:'/shi4.png',
    touMing1:'Node.js',
    touMing2:'小程序',
    p1:"微信小程序云开发-从0打造云音乐全栈小程序",
    span1:'实战',
    span2:'中级',
    span3:'95',
    span4:'￥298.00',
    span5:'￥348.00',
    span6:'限时优惠'
  },
  {
    img:'/shi1.jpg',
    touMing1:'计算机网络',
    p1:"编程必备基础知识 计算机组成原理+操作系统+计算机网络",
    span1:'实战',
    span2:'中级',
    span3:'1449',
    span4:'￥236.00',
    span5:'￥299.00',
  },
  {
    xinKe:"新课",
    img:'/shi2.jpg',
    touMing1:'Vue.js',
    touMing2:'小程序',
    p1:"零基础入门 实战mpvue2.0多端小程序框架",
    span1:'实战',
    span2:'初级',
    span3:'127',
    span4:'￥226.00',
    span5:'￥266.00',
    span6:'限时优惠'
  },
  {
    img:'/shi3.jpg',
    touMing1:'Vue.js',
    p1:"Vue2.5开发去哪儿网App 从零基础入门到实战项目",
    span1:'实战',
    span2:'中级',
    span3:'6396',
    span4:'￥266.00',
  }
]
// 实战推荐的大组件
class ShiZhan extends Component {
    render() {
      return (
       <MainDiv3 title={title} id={id} XinShouList2={XinShouList2} />
      );
    }
  }
  export default ShiZhan;
