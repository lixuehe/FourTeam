import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='前端开发';
const lei='lunboLanHide1';
const lunboLanHide11aList1=[
    'HTML/CSS',
    'JavaScript',
    'Vue.js',
    'React.J',
    'Angular',
    'Node.js',
    'jQuery',
    'Bootstrap',
    'Sass/Less',
    '小程序',
    '前端工具',
    'CSS',
    'Html5',
    'CSS3'
]
const lunboLanHideList=[
    {
     img:"/c1",
     h3:"前端零基础入门",
     span1:"￥699.00",
     span2:"·",
     span3:'6步/42课',
     span4:"·",
     span5:"670"
    },
    {
    img:"/c2",
    h3:"微信小程序入门与实战 常用组件API开发技巧项目实战",
    span1:"￥149.00",
    span2:"·",
    span3:'初级',
    span4:"·",
    span5:"18367"
    },
    {
    img:"/c3",
    h3:"Vue核心技术Vue+Vue-Router+Vuex+SSR实战精讲",
    span1:"￥366.00",
    span2:"·",
    span3:'高级',
    span4:"·",
    span5:"2074"
    },
    {
    img:"/c4",
    h3:"Vue2.5开发去哪儿网App 从零基础入门到实战项目",
    span1:"￥266.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"6392"
    },
]
class CeLanDiv2 extends Component{

    render(){
        return( 
            // <!-- 轮播侧拦点击出现div1 -->
            <CeLanDiv title1={title1} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHideList={lunboLanHideList}/>

        )
    }
}
export default CeLanDiv2;