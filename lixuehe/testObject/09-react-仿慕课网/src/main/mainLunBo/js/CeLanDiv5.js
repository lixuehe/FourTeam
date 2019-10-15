import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='计算机基础';
const title2="云计算&大数据";
const lei='lunboLanHide4';
const lunboLanHide11aList1=[
    '计算机网络',
    '算法与数据结构',
    '数学'
]
const lunboLanHide11aList2=[
    '大数据',
    'Hadoop',
    'Spark',
    'Hbase',
    'Storm',
    '云计算',
    'AWS',
    'Docker',
    'Kubernetes'
]
const lunboLanHideList=[
    {
     img:"/f1",
     h3:"BAT大牛亲授 个性化推荐算法实战",
     span1:"￥399.00",
     span2:"·",
     span3:'中级',
     span4:"·",
     span5:"422"
    },
    {
    img:"/f2",
    h3:"轻松愉快之玩转SpringData",
    span3:'中级',
    span4:"·",
    span5:"29665"
    },
    {
    img:"/f3",
    h3:"高等数学-学习算法/人工智能/大数据的第一步",
    span1:"￥266.00",
    span2:"·",
    span3:'初级',
    span4:"·",
    span5:"918"
    },
    {
    img:"/f4",
    h3:"HBase入门",
    span3:'初级',
    span4:"·",
    span5:"24312"
    },
]
class CeLanDiv5 extends Component{
    render(){
        return( 
            <CeLanDiv title1={title1} title2={title2} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHide11aList2={lunboLanHide11aList2} lunboLanHideList={lunboLanHideList}/>
        )
    }
}
export default CeLanDiv5;