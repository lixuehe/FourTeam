import React, { Component } from 'react';
import "../css/LunBoCeLan.css";
import CeLanDiv1 from './CeLanDiv1';
import CeLanDiv2 from './CeLanDiv2';
import CeLanDiv3 from './CeLanDiv3';
import CeLanDiv4 from './CeLanDiv4';
import CeLanDiv5 from './CeLanDiv5';
import CeLanDiv6 from './CeLanDiv6';
import CeLanDiv7 from './CeLanDiv7'; 
import $ from "jquery";
// import $ from 'jquery';

const LunBoCeLanList=[
  '前沿 / 区块链 / 人工智能',
  '前端 / 小程序 / JS',
  '后端 / JAVA / Python',
  '移动 / Android / iOS',
  '云计算 / 大数据 / 容器',
  '运维 / 测试 / 数据库',
  'UI设计 / 3D动画 / 游戏' 
]
// 鼠标移入侧栏显示对应的div
$(function(){
  $(".CeLanP1").on("mouseover",function(){
      $(".lunboLanHide0").show();
  })
  $(".CeLanP1").on("mouseout",function(){
      $(".lunboLanHide0").hide();
  })
  $(".lunboLanHide0").on("mouseover",function(){
      $(".lunboLanHide0").show();
  })
  $(".lunboLanHide0").on("mouseout",function(){
      $(".lunboLanHide0").hide();
  })

  $(".CeLanP2").on("mouseover",function(){
      $(".lunboLanHide1").show();
  })
  $(".CeLanP2").on("mouseout",function(){
      $(".lunboLanHide1").hide();
  })
  $(".lunboLanHide1").on("mouseover",function(){
      $(".lunboLanHide1").show();
  })
  $(".lunboLanHide1").on("mouseout",function(){
      $(".lunboLanHide1").hide();
  })

  $(".CeLanP3").on("mouseover",function(){
      $(".lunboLanHide2").show();
  })
  $(".CeLanP3").on("mouseout",function(){
      $(".lunboLanHide2").hide();
  })
  $(".lunboLanHide2").on("mouseover",function(){
      $(".lunboLanHide2").show();
  })
  $(".lunboLanHide2").on("mouseout",function(){
      $(".lunboLanHide2").hide();
  })

  $(".CeLanP4").on("mouseover",function(){
      $(".lunboLanHide3").show();
  })
  $(".CeLanP4").on("mouseout",function(){
      $(".lunboLanHide3").hide();
  })
  $(".lunboLanHide3").on("mouseover",function(){
      $(".lunboLanHide3").show();
  })
  $(".lunboLanHide3").on("mouseout",function(){
      $(".lunboLanHide3").hide();
  })

  $(".CeLanP5").on("mouseover",function(){
      $(".lunboLanHide4").show();
  })
  $(".CeLanP5").on("mouseout",function(){
      $(".lunboLanHide4").hide();
  })
  $(".lunboLanHide4").on("mouseover",function(){
      $(".lunboLanHide4").show();
  })
  $(".lunboLanHide4").on("mouseout",function(){
      $(".lunboLanHide4").hide();
  })

  $(".CeLanP6").on("mouseover",function(){
      $(".lunboLanHide5").show();
  })
  $(".CeLanP6").on("mouseout",function(){
      $(".lunboLanHide5").hide();
  })
  $(".lunboLanHide5").on("mouseover",function(){
      $(".lunboLanHide5").show();
  })
  $(".lunboLanHide5").on("mouseout",function(){
      $(".lunboLanHide5").hide();
  })

  $(".CeLanP7").on("mouseover",function(){
      $(".lunboLanHide6").show();
  })
  $(".CeLanP7").on("mouseout",function(){
      $(".lunboLanHide6").hide();
  })
  $(".lunboLanHide6").on("mouseover",function(){
      $(".lunboLanHide6").show();
  })
  $(".lunboLanHide6").on("mouseout",function(){
      $(".lunboLanHide6").hide();
  })  
  $("#lunboLanHideDivH3").on("mouseover",function(){
    $(".red").css("color","red");  
  })  
  $("#lunboLanHideDivH3").on("mouseout",function(){
      $(".red").css("color","#4D555D");
  }) 
})

class LunBoCeLan extends Component {
  render() {
    return (
        // <!-- 轮播图侧边的黑色导航栏 -->
        <div>
         <div id="lunboLan11">
              <div class='CeLanP1' ><p className="qian"><span>{LunBoCeLanList[0]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP2' ><p className="qian"><span>{LunBoCeLanList[1]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP3' ><p className="qian"><span>{LunBoCeLanList[2]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP4' ><p className="qian"><span>{LunBoCeLanList[3]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP5' ><p className="qian"><span>{LunBoCeLanList[4]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP6' ><p className="qian"><span>{LunBoCeLanList[5]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
              <div class='CeLanP7' ><p className="qian"><span>{LunBoCeLanList[6]}</span><i><img src={require("../imgs/anjian.png")}/></i></p></div>
          </div>      
          {/* <!-- 轮播侧拦点击出现div1 --> */}
          <CeLanDiv1/>
          {/* <!-- 轮播侧拦点击出现div2 --> */}
          <CeLanDiv2/>
          {/* {/* <!-- 轮播侧拦点击出现div3 -->  */}
           <CeLanDiv3/>
          {/* <!-- 轮播侧拦点击出现div4 --> */}
          <CeLanDiv4/> 
          {/* <!-- 轮播侧拦点击出现div5 --> */}
          <CeLanDiv5/>
          {/* <!-- 轮播侧拦点击出现div6 --> */}
          <CeLanDiv6/>
          {/* <!-- 轮播侧拦点击出现div7 --> */}
           <CeLanDiv7/>
        </div> 
    );
  }
}
export default LunBoCeLan;