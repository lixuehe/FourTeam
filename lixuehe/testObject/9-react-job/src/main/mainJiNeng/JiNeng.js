import React, { Component } from 'react';
import './JiNeng.css'
import MainDiv3 from '../mainDiv3';
const title="技/能/提/升";
const id="xsrm";
const XinShouList1=[
  {
    class:"xinshow3",
    h3:"Vue高级工程师实战之路",
    p:'从Vue基础语法入门最流行的SSR技术实现，完美学习路线打造快速晋升之路！'
  },
  {
    class:"xinshow4",
    h3:'Python开发一站式学习',
    p:'从入门到开发，学习 好玩 好用 好未来的Python语言'
  }
]
const XinShouList2=[
  {
    xinKe:'新课',
    img:'/j3.jpg',
    touMing1:'Android',
    touMing2:'iOS',
    p1:"Flutter从入门到进阶 实战携程网App",
    span1:'实战',
    span2:'中级',
    span3:'1582',
    span4:'￥348.00',
  },
  {
    img:'/j4.jpg',
    touMing1:'Android',
    touMing2:'iOS',
    p1:"5G时代必备 音视频WebRTC实时互动直播技术入门与实战",
    span1:'实战',
    span2:'中级',
    span3:'563',
    span4:'￥288.00',
  },
  {
    img:'/j33.jpg',
    touMing1:'Java',
    touMing2:'SpringBoot',
    p1:"Spring Boot 2.0深度实践之系列总览",
    span1:'高级',
    span3:'22519',
    span4:'免费',
  },
  {
    img:'/j44.jpg',
    touMing1:'Vue.js',
    p1:"Vue.js源码全方位深入解析",
    span1:'实战',
    span2:'高级',
    span3:'2262',
    xIng:'xIng',
    span4:'￥488.00',

  },
  {
    img:'/j5.jpg',
    p1:"React16+Redux实战企业级大众点评Web App",
    span1:'实战',
    span2:'中级',
    span3:'468',
    xIng:'xIng',
    span4:'￥299.00',
  },
  {
    xinKe:'新课',
    img:'/j6.png',
    touMing1:'Go',
    p1:"Go开发短地址服务",
    span1:'高级',
    span3:'620',
    span4:'免费',
  },
  {
    xinKe:'新课',
    img:'/j7.jpg',
    touMing1:'SpringBoot',
    touMing2:'SSM',
    p1:"Java主流技术栈SSM+SpringBoot商铺系统(升级更新)",
    span1:'实战',
    span2:'初级',
    span3:'2664',
    span4:'￥298.00',
  },
  {
    img:'/j8.png',
    touMing1:'Vue.js',
    p1:"axios在vue中的使用",
    span1:'中级',
    span3:'4129',
    span4:'免费',
  },
  {
    img:'/j9.jpg',
    touMing1:'深度学习',
    touMing2:'计算机视觉',
    p1:"Python3+TensorFlow打造人脸识别智能小程序",
    span1:'实战',
    span2:'中级',
    span3:'316',
    span4:'￥466.00',
  },
  {
    img:'/j10.jpg',
    touMing1:'Linux',
    p1:"玩转Vim  从放弃到爱不释手",
    span2:'中级',
    span3:'9740',
    xIng:'xIng',
    span4:'免费',
  }
]
// 技能提升的大组件
class JiNeng extends Component {
    render() {
      return (
        <MainDiv3 title={title} id={id} XinShouList1={XinShouList1} XinShouList2={XinShouList2} />
      );
    }
  }
  export default JiNeng;