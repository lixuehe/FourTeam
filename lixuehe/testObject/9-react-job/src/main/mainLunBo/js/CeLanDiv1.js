import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='前沿技术';
const lei='lunboLanHide0';
const lunboLanHide11aList1=[
    '微服务',
    '区块链',
    '以太坊',
    '机器学习',
    '深度学习',
    '计算机视觉',
    '数据分析&挖掘'
]
const lunboLanHideList=[
    {
     img:"/b1",
     h3:"OpenCV+TensorFlow 入门人工智能图像处理",
     span1:"￥299.00",
     span2:"·",
     span3:'中级',
     span4:"·",
     span5:"670"
    },
    {
    img:"/b2",
    h3:"区块链技术核心概念及原理讲解",
    span3:'入门',
    span4:"·",
    span5:"44601"
    },
    {
    img:"/b3",
    h3:"深度学习之目标检测常用算法原理+实战精讲",
    span1:"￥499.00",
    span2:"·",
    span3:'高级',
    span4:"·",
    span5:"350"
    },
    {
    img:"/b4",
    h3:"Python人工智能常用库Numpy使用入门",
    span3:'初级',
    span4:"·",
    span5:"29849"
    },
]
class CeLanDiv1 extends Component{
    render(){
        return( 
            // <!-- 轮播侧拦点击出现div1 -->
            <CeLanDiv title1={title1} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHideList={lunboLanHideList}/>
        )
    }
}
export default CeLanDiv1;