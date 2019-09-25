import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='移动开发';
const lei='lunboLanHide3';
const lunboLanHide11aList1=[
    'Android',
    'iOS',
    'React native',
    'WEEX'
]
const lunboLanHideList=[
    {
     img:"/e1",
     h3:"Android 零基础入门",
     span1:"￥699.00",
     span2:"·",
     span3:'5步/40课',
     span4:"·",
     span5:"499"
    },
    {
    img:"/e2",
    h3:"新版React Native+Redux打造高质量上线",
    span1:"￥399.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"1060"
    },
    {
    img:"/e3",
    h3:"Flutter从入门到进阶 实战携程网APP",
    span1:"￥348.00",
    span2:"·",
    span3:'中级',
    span4:"·",
    span5:"1578"
    },
    {
    img:"/e4",
    h3:"Top团对大牛带你玩转Android性能分析与优化",
    span1:"￥288.00",
    span2:"·",
    span3:'高级',
    span4:"·",
    span5:"578"
    },
]
class CeLanDiv4 extends Component{
    render(){
        return( 
            <CeLanDiv title1={title1} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHideList={lunboLanHideList}/>

        )
    }
}
export default CeLanDiv4;