import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='UI设计&多媒体';
const title2='游戏';
const lei='lunboLanHide6';
const lunboLanHide11aList1=[
    '模型制作',
    '动效动画',
    '设计基础',
    '设计工具',
    'APPUI设计',
    '产品交互'
]
const lunboLanHide11aList2=[
    'Unity 3D',
    'Cocos2d-x'
]
const lunboLanHideList=[
    {
     img:"/h1",
     h3:"产品交互设计快速入门与实战",
     span1:"￥199.00",
     span2:"·",
     span3:'初级',
     span4:"·",
     span5:"625"
    },
    {
    img:"/h2",
    h3:"高薪设计师必修课 AE移动UI动效设计从入门到实战",
    span1:"￥199.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"282"
    },
    {
    img:"/h3",
    h3:"Axure入门初体验",
    span3:'入门',
    span4:"·",
    span5:"62466"
    },
    {
    img:"/h4",
    h3:"前端工程师必备的PS技能——切图篇",
    span3:'初级',
    span4:"·",
    span5:"252431"
    },
]
class CeLanDiv1 extends Component{

    render(){
        return( 
            <CeLanDiv title1={title1} title2={title2} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHide11aList2={lunboLanHide11aList2} lunboLanHideList={lunboLanHideList}/>
        )
    }
}
export default CeLanDiv1;