import React, { Component } from 'react';
import "./MingShi.css";
import MingShiLunBoA from './MingShiLunBoA';
const title="慕/课/精/英/名/师";
const span="查看更多>";

const jymsLunBoList=[
    {
        img:'/ms1.jpg',
        span1:'7七月',
        span2:'全栈工程师',
        span3:'十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    },
    {
        img:'/ms2.jpg',
        span1:'廖师兄',
        span2:'JAVA开发工程师',
        span3:'载着干货的老司机。微服务，分布式架构方面经验丰富。'
    },
    {
        img:'/ms3.jpg',
        span1:'liuyubobobo',
        span2:'全栈工程师',
        span3:'创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    },
    {
        img:'/ms4.jpg',
        span1:'慕课官方号',
        span2:'慕课官方号',
        span3:'慕课，Massive（大规模）Open（开放）Online（在线）Course（课程）。专注做好IT技能教育的MOOC，符合互联网发展潮流接地气儿的MOOC。我们有更多免费资源，我们只教有用的，我们专心做教育。'
    },
    {
        img:'/ms5.jpg',
        span1:'7Oeasy七月',
        span2:'页面重构设计',
        span3:'他，授课风趣幽默，激情四射，自称屌丝青年，中国传媒大学计算机教师；他，专注于网页制作、平面设计、多媒体等多个领域的软件以及应用的挖掘与创新，热爱分享，是新鲜热门软件和应用的导航标，他就是众粉丝心中的“Oeasy老湿'
    },
    {
        img:'/ms6.jpg',
        span1:'谢成',
        span2:'全栈工程师',
        span3:'十年研发工作经验，大型公司任高级项目经理及金牌内训讲师，具有丰富的企业面试经验及带团队的经验，个人主导了多个重大项目的研发工作。在Java、NodeJS、JavaScript、HTML5、CSS3、VueJs、ReactJs、前端工程化、前端架构等方面均有建树。在教学过程中，把工作中所遇到的问题及重点融入到课程体系当中，注重培养学生分析问题及解决问题的能力。'
    },
    {
        img:'/ms7.jpg',
        span1:'悟空',
        span2:'JAVA开发工程师',
        span3:'硕士毕业于世界排名Top 9的慕尼黑工业大学（计算机学科排名），国内毕业于同济大学，成绩专业排名Top 1，获公派留学全额奖学金，现就职于一线明星互联网公司。课程深入浅出、系统全面、通俗易懂、干货满满。讲课时充满热情，声情并茂，全程无废话，生动有趣。'
    },
    {
        img:'/ms8.jpg',
        span1:'LGD_Sunday',
        span2:'全栈工程师',
        span3:'6年前端、移动端开发经验，在WEB、Android、IOS领域有独特的见解，统筹过的多个项目用户数已过千万，曾就职国内一线互联网公司，目前成立个人开发工作室。致力于研究大前端技术知识，曾为多家互联网公司培训大前端技术，并受邀参加 Google 中国技术分享会，擅长引导学生从本质到思想再到具体解决方案过渡'
    },
    {
        img:'/ms9.jpg',
        span1:'小马哥',
        span2:'JAVA开发工程师',
        span3:'小马哥， BAT 互联网技术专家，十余年 Java EE 从业经验，Apache 开源工程核心开发、架构师。目前主要负责集团微服务基础设施构建、架构衍进等。获得 SUN Java（SCJP、SCWCD、SCBCD）以及 Oracle OCA 等的认证。'
    },
    {
        img:'/ms10.jpg',
        span1:'神思者',
        span2:'全栈工程师',
        span3:'曾就职于IBM，中软国际等大型互联网公司，参与主持了Nebula云平台，Peony分布式前端渲染平台，Taims医疗云，Jobseeker人才库等大型系统的开发，多次担任教育部大学生互联网创新创业大赛导师与评委'
    },
]
// 精英名师大组件
class MingShi extends Component {
  render() {
    return (
      <div id="main">
           <div id="ms">
           <div id="jyms">
                <h3 ><i className="i16"></i>{title}<i className="i16"></i><span>查看更多></span></h3>
                 {/* <!-- 轮播图所在的div --> */}
                <div className="swiper-container">
                    {/* <!--轮播图--> */}
                    <div className="swiper-wrapper">
                        {jymsLunBoList.map(item=>
                           <MingShiLunBoA item={item}/>
                        )}                       
                    </div>

                     {/* <!-- 小圆点 --> */}
                    <div className="swiper-pagination"></div>
                    {/* 左右按键 */}
                    <div className="swiper-button-next">
                        <span>&gt;</span>
                    </div>
                    <div className="swiper-button-prev">
                        <span>&lt;</span>
                    </div> 
                    </div>         
            </div>

           </div>
              
      </div>
    );
  }
}
export default MingShi;