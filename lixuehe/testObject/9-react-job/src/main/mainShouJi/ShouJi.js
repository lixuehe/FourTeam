import React, { Component } from 'react';
import "./ShouJi.css";
import ShouJiWenZhang from './ShouJiWenZhang';
import XiangGuanYuanWen from './XiangGuanYuanWen';

const title="精/彩/手/记/及/猿/问";
const ReMenList={
    class:"sj1",
    p1:'热门话题',
    p2:"# 【内推第２波】＃",
    p3:"打工奋斗7万落京户VS自主创业牧马城市，如何抉择？",
    img:'/sj1.jpg',
    p4:'毕业求职？跳槽加薪？纠结滋润加班还是苦练x年自主创业？速速提问互撩，你在撩的极有可能就是你的Boss！激不激动？惊不惊喜？Offer已在这里！你的简历在哪里？Scott老师邮箱：wolf18387',
    p5:"了解详情 —>",
    span:'往期回顾',
    p6:'更多往期话题'
}
const HuiGuList=[
  {
    p1:'#【获奖名单戳查看更多】#',
    p2:'当我们谈论Java时，我们都谈些什么？',
    img:'/sj2.jpg'
  },
  {
    p1:'#【内推第1波】#',
    p2:'直击BAT面试机会！行业大佬在线答疑',
    img:'/sj3.jpg'
  },
  {
    p1:'#【花式填坑】第23期 #',
    p2:'运维进化篇：成为Python DevOps工程师有哪些必备条件？',
    img:'/sj4.jpg'
  }
]
const ShouJiWenZhangList=[
  {
    class:'sj2',
    span1:'手记文章',
    p1:'【React学习路线】从零进阶前端核心工程师',
    img:'/sj5.jpg',    
    p2:'哈喽，良心推荐小慕又来跟大家分享啦，今天分享的是React~ 面向工资编程，前端核心框架、加薪神器React了解一下！ React毫无疑问是前端界主流的框架，而框架本身就是热点，可以说是前端工程师们能力提升、快速晋升高级开发工程师的必备技能。 还不知道如何入门？ 技术提升遇到瓶颈？ 别担心，下面小慕就跟大家详细聊一下React的学习路线，入门到进阶的秘籍都在这里啦！ 第一阶段：React快速入门 ...',
    span2:'浏览14528',
    span3:'推荐98',
    span4:'阅读全文—>'
  },
  {
    class:'sj4',
    span1:'手记文章',
    p1:'【干货合辑】都2019年下半年了， 抓紧上车 ，今年新热技术都在这里！	',
    img:'/sj6.jpg',
    p2:'哈喽，良心推荐小慕又来跟大家分享啦，今天分享的是React~ 面向工资编程，前端核心框架、加薪神器React了解一下！ React毫无疑问是前端界主流的框架，而框架本身就是热点，可以说是前端工程师们能力提升、快速晋升高级开发工程师的必备技能。 还不知道如何入门？ 技术提升遇到瓶颈？ 别担心，下面小慕就跟大家详细聊一下React的学习路线，入门到进阶的秘籍都在这里啦！ 第一阶段：React快速入门 ...',
    span2:'浏览12018',
    span3:'推荐92',
    span4:'阅读全文—>'
  },
  {
    class:'sj5',
    span1:'手记文章',
    p1:'【涨薪秘籍】安卓工程师的进阶实战之路	',
    img:'/sj7.jpg',
    p2:'Android知识杂乱无章，不知道从哪入手？ 技术更新频繁，学不动了，从业者该何去何从？ 工作多年，年龄上升工资却迟迟不涨，危机感满满，该如何破解？ 是时候该开启你的安卓实战之路啦！涨薪的奥秘都在这里！ 今天小慕给大家带来安卓三个阶段的学习路线，从项目入手，逐步深入的带你理解并掌握Android的核心技术，帮助你成为具备高薪实力的Android开发者，顺利破解职场危机！ 不多说啦，上干货。 第一阶...',
    span2:'浏览9202',
    span3:'推荐39',
    span4:'阅读全文—>'
  },
  {
    class:'sj9',
    span1:'手记文章',
    p1:'【前端学习路线】以企业需求为导向，看新手如何系统学习前端	',
    img:'/sj8.jpg',
    p2:'前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！     首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下   根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
    span2:'浏览26929',
    span3:'推荐236',
    span4:'阅读全文—>'
  },
  {
    class:'sj10',
    span1:'手记文章',
    p1:'【面试技巧系列】找工作、涨薪、跳槽都得来一份	',
    img:'/sj9.jpg',
    p2:'面试是程序员求职过程中最重要的一步 别以为面试技巧很虚 很多技术不错的人 恰恰输在了面试技巧上 知识点怎么复习、问题如何回答 怎么在面试时避免采坑、惊艳面试官 怎么与HR谈论薪资待遇…… 往往这些问题决定你能否成功应聘。 敲黑板划重点： 以下面试技巧神器你值得拥有！ 大量干货文章袭来预警~ 一、通用篇 干货文章： 聪明人喜欢这样写简历 如何有效地备战面试 【程序员】在面...',
    span2:'浏览27606',
    span3:'推荐124',
    span4:'阅读全文—>'
  },
  {
    class:'sj11',
    span1:'手记文章',
    p1:'【干货推荐】java工程师从零进阶，大牛带你轻松上路	',
    img:'/sj10.jpg',
    p2:'java新手不知如何入门？ 经验多却面临上升瓶颈期？ 想进阶高级工程师还差点火候？ 今天这波最实用的java实战之路 以战养兵 为你打通职业发展脉络 沿着Java大牛们的思路， 逐步成长为一名业务与思想同样优秀的Java开发者。 就业、晋升、管理均游刃有余！ 不多说了，上干货！ 阅读指南：本文专为Java开发行业人员设计，分为四个阶段，循序渐进的带你进行SSM框架、SpringBoot框架、微服务...',
    span2:'浏览28037',
    span3:'推荐157',
    span4:'阅读全文—>'
  },
]
const XiangGuanYuanWenList=[
  {
    class:'sj3',
    span:'相关猿问',
    p1:'java好学吗.??',
    p2:'最赞回答',
    p3:'挺好的！',
    p4:'共273个回答—>'
  },
  {
    class:'sj6',
    span:'相关猿问',
    p1:'【有奖问答】与大咖交流前端JS与框架开发，免费赢取前端图书（11.28-12.4）',
    p2:'最赞回答',
    p3:'我觉得不管学习哪门语言，到后面总还是要学习一下规范，程序员的素养必不可少啊！！',
    p4:'共158个回答—>'
  },
  {
    class:'sj7',
    span:'相关猿问',
    p1:'各位猿或者媛，一般几点睡啊。有时忍住头痛看java<br>到很晚，第二天就头痛一整天',
    p2:'已采纳回答',
    p3:'没有什么事情是需要熬夜完成的',
    p4:'共370个回答—>'
  },
  {
    class:'sj8',
    span:'相关猿问',
    p1:'一个类文件里可以定义两个类吗？',
    p4:'共2个回答—>'
  },
]
// 精彩手记及猿问大组件
class ShouJi extends Component {
  render() {
    return (
      <div id="sj" className="jingcaishouji">
        <div id="shiZhan">
            <h3 ><i className="i15"></i>{title}<i className="i15"></i></h3>
            <div id="shiZhan"> 
            {/* <!-- 第一列第一个div --> */}
              <div className={"sj0 "+ReMenList.class}>
                  <p className="sj1p1">{ReMenList.p1}</p>
                  <div className="sjimg">
                      <div className="sjimg1">
                          <p className="sjimg1p">{ReMenList.p2}</p>
                          <p className="sjimg1p">{ReMenList.p3}</p>
                      </div>
                      <div className="sjimg2">  
                          <img src={require("./imgs/sj1.jpg")}/>                                
                      </div>                                
                  </div>
                  <p className="sj1p2">{ReMenList.p4}</p>
                  <p className="sjxq">{ReMenList.p5}</p>
                  <div id="sjhg"><span>{ReMenList.span}</span></div>
                {HuiGuList.map(item1=>
                  <div className="sjimg">
                      <div className="sjimg1" id="pp">
                          <p className="sjimg1p ppp">{item1.p1}</p>
                          <p className="sjimg1p ppp">{item1.p2}	</p>
                      </div>
                      <div className="sjimg2">  
                          <img src={require('./imgs'+item1.img)}/>                                
                      </div>                                
                </div>                
                )}
                 <p className="sjxq">{ReMenList.p6}</p>
             </div>
             {ShouJiWenZhangList.map(item=>
                <ShouJiWenZhang item={item}/>
             )}
             {XiangGuanYuanWenList.map(item=>
                <XiangGuanYuanWen item={item}/>
              )}
            </div>
                      
        </div>
              
      </div>
    );
  }
}
export default ShouJi;