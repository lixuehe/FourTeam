import React, { Component } from 'react';
import './XinShou.css'
import MainDiv3 from '../mainDiv3';
const title="新/手/入/门";
const id='xsrm';
const XinShouList1=[
  {
    class:"xinshow1",
    h3:"站上微信小程序风口，实现职业华丽转身",
    p:'入门技能+项目开发，逐步深入学习微信小程序开发'
  },
  {
    class:"xinshow2",
    h3:'盘点最主流的前端框架有哪些？',
    p:'上万人的选择打消你对主流框架的疑惑'
  }
]
const XinShouList2=[
  {
    img:'/x1.jpg',
    touMing1:'JAVA攻城狮培养计划',
    p1:"Java 零基础入门",
    span1:'就业班',
    span2:'３步/28课',
    span3:'1541',
    span4:'￥568.00',
  },
  {
    img:'/x2.jpg',
    touMing1:'Web前端攻城狮培养计划',
    p1:"前端零基础入门",
    span1:'就业班',
    span2:'６步42课',
    span3:'2146',
    span4:'￥699.00',
  },
  {
    img:'/x3.jpg',
    touMing1:'PHP攻城狮培养计划',
    p1:"PHP攻城狮培养计划",
    span1:'就业班',
    span2:'5步26课',
    span3:'970',
    span4:'￥658.00',
  },
  {
    img:'/x4.jpg',
    touMing1:'SpringBoot',
    touMing2:'小程序',
    p1:"Spring Boot仿抖音短视频小程序开发 全栈式实战项目",
    span1:'实战',
    span2:'中级',
    span3:'1602',
    xIng:'xIng',
    span4:'￥348',

  },
  {
    img:'/x5.jpg',
    touMing1:'大数据',
    touMing2:"Hadoop",
    p1:"大数据入门第一课 Hadoop基础知识与电商网站日志数据分析",
    span1:'实战',
    span2:'中级',
    span3:'707',
    xIng:'xIng',
    span4:'￥288.00',
  },
  {
    img:'/x6.jpg',
    touMing1:'Python攻城狮培养计划',
    p1:"Python零基础入门",
    span1:'就业班',
    span2:'５步23课',
    span3:'1123',
    span4:'￥666.00',
  },
  {
    img:'/x7.jpg',
    touMing1:'Android',
    p1:"Flutter入门与案例实战",
    span1:'入门',
    span3:'18374',
    span4:'免费',
  },
  {
    img:'/x8.jpg',
    touMing1:'Android攻城狮培养计划',
    p1:"Android 零基础入门",
    span1:'就业班',
    span2:'5步40课',
    span3:'500',
    span4:'￥699.00',
  },
  {
    img:'/x9.jpg',
    touMing1:'小程序',
    p1:"轻松入门微信小程序与云开发",
    span1:'初级',
    span3:'25190',
    span4:'免费',
  },
  {
    img:'/x10.jpg',
    touMing1:'HTML/CSS',
    touMing2:'小程序',
    p1:"商业级支付宝小程序入门与实战",
    span1:'实战',
    span2:'初级',
    span3:'244',
    xIng:'xIng',
    span4:'￥299.00',
  }
]
// 新手的大组件
class XInShou extends Component {
    render() {
      return (
        <MainDiv3 title={title} id={id} XinShouList1={XinShouList1} XinShouList2={XinShouList2} />
      );
    }
  }
  export default XInShou;