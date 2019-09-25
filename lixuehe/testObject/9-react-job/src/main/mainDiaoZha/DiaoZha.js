import React, { Component } from 'react';
import "./DiaoZha.css";
import DiaoZha2 from './DiaoZha2';
import DiaoZha1 from './DiaoZha1';
const title="吊/炸/天/全/明/星";
const yuanTouList=[
    {
     class1:"dzyuantouDiv10",
     class2:"dzyuantouDiv20",
     p1:'妹妹的姐姐' ,
     p2:'风骚课程学霸'  
    },
    {
     class1:"dzyuantouDiv11",
     class2:"dzyuantouDiv21",
     p1:'onemoo',
     p2:'神秘解疑大神'  
    },
    {
     class1:"dzyuantouDiv12",
     class2:"dzyuantouDiv22",
     p1:'ibeautiful',
     p2:'智慧文章王者'  
    },
    {
     class1:"dzyuantouDiv13",
     class2:"dzyuantouDiv23",
     p1:'we1231' ,
     p2:'慕课第一土豪'  
    }
]
const yuanTouList2=[
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd1.jpg',
        p1:'="风骚课程学霸"=',
        p2:'梨不开的桃子',
        p3:'一周获得 75积分',
        span:'◆'
    },
    {
        class:'lankuang',
        class2:'lan',
        img:'/dd2.jpg',
        p1:'="智慧文章王者"=',
        p2:'www说',
        p3:'一周发布手记 54 篇',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd3.jpg',
        p1:'="风骚课程学霸"=',
        p2:'灰灰520',
        p3:'一周获得 75积分',
        span:'◆'
    },
    {
        class:'lankuang',
        class2:'lan',
        img:'/dd4.jpg',
        p1:'="智慧文章王者"=',
        p2:'缥缈止盈',
        p3:'一周发布手记 32 篇',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd5.jpg',
        p1:'="智慧文章王者"=',
        p2:'python学长',
        p3:'一周发布手记 14 篇',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd6.jpg',
        p1:'="风骚课程学霸"=',
        p2:'追彩虹的小狐狸',
        p3:'一周获得 72积分',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd7.jpg',
        p1:'="风骚课程学霸"=',
        p2:'妹妹的姐姐',
        p3:'一周获得 78积分',
        span:'◆'
    },
    {
        class:'lankuang',
        class2:'lan',
        img:'/dd8.jpg',
        p1:'="智慧文章王者"=',
        p2:'黄小斜',
        p3:'一周发布手记 50 篇',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd9.jpg',
        p1:'="风骚课程学霸"=',
        p2:'好帮手慕柯南',
        p3:'一周获得 78积分',
        span:'◆'
    },
    {
        class:'lankuang',
        class2:'lan',
        img:'/dd10.jpg',
        p1:'="智慧文章王者"=',
        p2:'四季花海',
        p3:'一周发布手记 24 篇',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dd15.jpg',
        p1:'="智慧文章王者"=',
        p2:'下码看花',
        p3:'一周发布手记 16 篇',
        span:'◆'
    },
    {
        class:'lankuang lankuang12',
        class2:'lan',
        img:'/dd12.jpg',
        p1:'="风骚课程学霸"=',
        p2:'悬崖上的金魚姬',
        p3:'一周获得 72积分',
        span:'◆'
    },
    {
        class:'zikuang',
        class2:'zi',
        img:'/dz2.jpg',
        p1:'="智慧文章王者"=',
        p2:'ITMISS',
        p3:'一周发布手记 62 篇',
        span:'◆'
    },
    {
        class:'lankuang',
        class2:'lan',
        img:'/dd14.jpg',
        p1:'="风骚课程学霸"=',
        p2:'好帮手慕小班',
        p3:'一周获得 66积分',
        span:'◆'
    },
]

// 全明星的大组件
class DiaoZha extends Component {
  render() {
    return (
        <div id="dz">
            <div id="shiZhan">
                <h3 id="h3"><i className="i17"></i>{title}<i className="i17"></i></h3>  
                {/* <!-- 第一排头头像有字的div --> */}
                <div id="yuantou1">
                    {yuanTouList.map(item=>
                   <DiaoZha1 item={item}/>     
                    )}
                </div>
                {/* <!-- 全是头像的div --> */}
                <div id="yuantou2">
                    {yuanTouList2.map(item=>
                       <DiaoZha2 item={item}/>
                    )}

                </div>
            </div>
      </div>
    );
  }
}
export default DiaoZha;