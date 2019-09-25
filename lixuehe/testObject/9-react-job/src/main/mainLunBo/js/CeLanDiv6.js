import React, { Component } from 'react';
import '../css/CeLanDiv.css'
import CeLanDiv from './CeLanDiv';
const title1='运维&测试';
const title2='数据库';
const lei='lunboLanHide5';
const lunboLanHide11aList1=[
    '运维',
    '自动化运维',
    '运维工具',
    '中间件',
    'Linux',
    'C',
    '功能测试',
    '性能测试',
    '自动化测试',
    '接口测试',
    '安全测试'
]
const lunboLanHide11aList2=[
    'MySQL',
    'Redis',
    'MongoDB',
    'Oracle',
    'SQL Server',
    'NoSql'
]
const lunboLanHideList=[
    {
     img:"/g1",
     h3:"一站式学习Redis  从入门到高可用分布式实践",
     span1:"￥348.00",
     span2:"·",
     span3:'中级',
     span4:"·",
     span5:"1364"
    },
    {
    img:"/g2",
    h3:"使用java构建和维护接口自动化测试框架",
    span3:'中级',
    span4:"·",
    span5:"22521"
    }
]
class CeLanDiv6 extends Component{
    render(){
        return( 
            <CeLanDiv title1={title1} title2={title2} lei={lei} lunboLanHide11aList1={lunboLanHide11aList1} lunboLanHide11aList2={lunboLanHide11aList2} lunboLanHideList={lunboLanHideList}/>
        )
    }
}
export default CeLanDiv6;