import React, { Component } from 'react';
import MainDiv3 from '../mainDiv3';
const id="xsrm";
const title="前/沿/技/术";
const XinShouList1=[
  {
    class:"xinshow5",
    h3:"慕课微课",
    p:'超值课程最低一元体验'
  },
  {
    class:"xinshow6",
    h3:'改变职场命运，修炼全栈工程师的必修课',
    p:'练就编程十八般武艺，快速转型全栈开发，做全能型工程师！'
  }
]
const XinShouList2=[
  {
    xinKe:'新课',
    img:'/q3.png',
    touMing1:'AWS',
    touMing2:'Docker',
    p1:"AWS summit 2019精华：关于人工智能、应用程序开发、DevOps",
    span1:'入门',
    span3:'303',
    span4:'免费',
  },
  {
    img:'/q4.jpg',
    touMing1:'Java',
    touMing2:'SpringBoot',
    p1:"精讲Elastic-job + Quartz实现企业级定时任务",
    span1:'实战',
    span2:'中级',
    span3:'128',
    xIng:'xIng',
    span4:'￥348.00',
  },
  {
    img:'/q5.jpg',
    touMing1:'Java',
    p1:"MyBatis-Plus入门",
    span1:'高级',
    span3:'12085',
    span4:'免费',
  },
  {
    img:'/j4.jpg',
    touMing1:'性能测试',
    p1:"LoadRunner性能测试实战训练营",
    span1:'实战',
    span2:'中级',
    span3:'2262',
    xIng:'xIng',
    span4:'￥299.00',

  },
  {
    img:'/q8.jpg',
    touMing1:'JavaScript',
    p1:"下一代前端开发语言 TypeScript从零重构axios",
    span1:'实战',
    span2:'中级',
    span3:'1379',
    xIng:'xIng',
    span4:'￥388.00',
  },
  {
    img:'/q9.jpg',
    touMing1:'Go',
    touMing2:'区块链',
    p1:"私有区块链，我们一起GO",
    span1:'中级',
    span3:'15330',
    span4:'免费',
  },
  {
    img:'/q10.jpg',
    touMing1:'SpringBoot',
    touMing2:'Spark',
    p1:"Spark Streaming实时流处理项目实战",
    span1:'实战',
    span2:'中级',
    span3:'1022',
    xIng:'xIng',
    span4:'￥388.00',
  },
  {
    img:'/q11.jpg',
    touMing1:'深度学习',
    touMing2:'计算机视觉',
    p1:"TensorFlow与Flask结合打造手写体数字识别",
    span1:'中级',
    span3:'15241',
    span4:'免费',
  },
  {
    img:'/q12.jpg',
    touMing1:'大数据',
    touMing2:'Hadoop',
    p1:"大数据入门第一课 Hadoop基础知识与电商网站日志数据分析",
    span1:'实战',
    span2:'中级',
    span3:'707',
    xIng:'xIng',
    span4:'￥288.00',
  },
  {
    img:'/q13.jpg',
    touMing1:'机器学习',
    touMing2:'自然语言处理',
    p1:"玩转Vim  从放弃到爱不释手",
    span2:'初级',
    span3:'8463',
    span4:'免费',
  }
]
// 前沿技术的大组件
class QianYan extends Component {
    render() {
      return (
        <MainDiv3 title={title} id={id} XinShouList1={XinShouList1} XinShouList2={XinShouList2} />

      );
    }
  }
  export default QianYan;