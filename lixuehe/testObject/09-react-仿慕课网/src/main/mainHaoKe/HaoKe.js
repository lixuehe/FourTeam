import React, { Component } from 'react';
import './HaoKe.css'
import MainDiv3 from '../mainDiv3';
const title="新/上/好/课";
const id="xs";
const XinShouList2=[
  {
    xinKe:"新课",
    img:'/xin1.png',
    touMing1:'iOS',
    touMing2:'Vue.js',
    p1:"混合开发入门 主流开发方案实战京东移动端APP",
    span1:'实战',
    span2:'初级',
    span3:'124',
    xIng:'xIng',
    span4:'￥229.00',
    span5:'￥266.00',
    span6:'限时优惠'
  },
  {
    xinKe:"新课",
    img:'/xin2.jpg',
    touMing1:'Java',
    touMing2:'MySQL',
    p1:"阿里新零售数据库设计与实战",
    span1:'实战',
    span2:'初级',
    span3:'95',
    xIng:'xIng',
    span4:'￥288.00',
  },
  {
    xinKe:"新课",
    img:'/xin3.png',
    touMing1:'Node.js',
    touMing2:'小程序',
    p1:"微信小程序云开发-从0打造云音乐全栈小程序",
    span1:'实战',
    span2:'中级',
    span3:'98',
    xIng:'xIng',
    span4:'￥298.00',
    span5:'￥348.00',
    span6:'限时优惠'
  },
  {
    xinKe:"新课",
    img:'/xin4.png',
    touMing1:'Html5',
    touMing2:'CSS3',
    p1:"Chrome DevTools开发者工具调试指南",
    span1:'入门',
    span3:'1841',
    xIng:'xIng',
    span4:'免费',

  },
  {
    xinKe:"新课",
    img:'/xin5.jpg',
    touMing1:'React.JS',
    touMing2:"Vue.js",
    p1:"前端要学的测试课 从Jest入门到 TDD/BDD双实战",
    span1:'实战',
    span2:'中级',
    span3:'266',
    xIng:'xIng',
    span4:'￥299.00',
  },
  {
    xinKe:"新课",
    img:'/xin6.png',
    touMing1:'Java',
    p1:"Java并发编程精讲",
    span1:'实战',
    span2:'中级',
    span3:'229',
    xIng:'xIng',
    span4:'￥288.00',
    span5:'￥348.00',
    span6:'限时优惠'
  },
  {
    img:'/xin7.jpg',
    touMing1:'Node.js',
    touMing2:'小程序',
    p1:"Electron开发仿网易云音乐播放器",
    span1:'实战',
    span2:'初级',
    span3:'2695',
    span4:'￥6.60',
    span5:'￥69.00',
    span6:'限时优惠'
  },
  {
    img:'/xin8.jpg',
    touMing1:'PHP',
    p1:"版本管理工具介绍—Git篇",
    span2:'中级',
    span3:'149383',
    xIng:'xIng',
    span4:'免费',
  },
  {
    xinKe:"新课",
    img:'/xin9.png',
    touMing1:'数学',
    p1:"专为程序员设计的统计课 彻底学会统计分析",
    span1:'实战',
    span2:'初级',
    span3:'164',
    span4:'￥226.00',
    span5:'￥266.00',
    span6:'限时优惠'
  },
  {
    img:'/xin10.jpg',
    touMing1:'Node.js',
    touMing2:'小程序',
    p1:"从0到1手把手教你用Node.js+KOA2打造超好用的Web框架",
    span1:'实战',
    span2:'中级',
    span3:'890',
    xIng:'xIng',
    span4:'￥366.00',
  }
]
// 新上好课的大组件
class HaoKe extends Component {
    render() {
      return (
        <MainDiv3 title={title} id={id} XinShouList2={XinShouList2} />
      );
    }
  }
  export default HaoKe;