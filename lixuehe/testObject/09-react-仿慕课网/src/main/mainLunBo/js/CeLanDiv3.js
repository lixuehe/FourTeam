import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='后端开发';
const lei='lunboLanHide2';
//a标签列表
const lunboLanHide11aList1=[
    'Java',
    'SpringBoot',
    'Spring Cloud',
    'Python',
    '爬虫',
    'Django',
    'Go',
    'PHP',
    'C',
    'C++',
    'C#',
    'Ruby'
]
// 每个小ｄｉｖ 中的文字
const lunboLanHideList=[
    {
     img:"/d1",
     h3:"Java 零基础入门",
     span1:"￥568.00",
     span2:"·",
     span3:'3步/28课',
     span4:"·",
     span5:"1529"
    },
    {
    img:"/d2",
    h3:"Spring Boot2.0深度实践之核心技术篇",
    span1:"￥366.00",
    span2:"·",
    span3:'高级',
    span4:"·",
    span5:"1815"
    },
    {
    img:"/d3",
    h3:"Socket网络编程进阶与实战",
    span1:"￥348.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"1396"
    },
    {
    img:"/d4",
    h3:"Java设计模式精讲  Debug方式+内存分析",
    span1:"￥299.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"1815"
    },
]
class CeLanDiv3 extends Component{

    render(){
        return( 
            <CeLanDiv title1={title1} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHideList={lunboLanHideList}/>

        )
    }
}
export default CeLanDiv3;