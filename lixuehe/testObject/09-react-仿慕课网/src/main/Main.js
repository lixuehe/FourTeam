import React, { Component } from 'react';
import LunBo from './mainLunBo/js/LunBo';
import ShiZhan from './mainShiZhan/ShiZhan';
import HaoKe from './mainHaoKe/HaoKe';
import XInShou from './mainXinShou/XInShou';
import JiNeng from './mainJiNeng/JiNeng';
import QianYan from './mainQianYan/QianYan';
import ShouJi from './mainShouJi/ShouJi';
import MingShi from './mainMingShi/MingShi';
import DiaoZha from './mainDiaoZha/DiaoZha';

// 整个页面的大组件
class Main extends Component {
  render() {
    return (
      <div id="main">
          {/* 轮播图所在的组件 */}
          <LunBo/>
          {/* 实战推荐--前沿技术所在的组件 */}
          <ShiZhan/>
          {/* 新上好课所在的组件 */}
          <HaoKe/>
          {/* 新手入门所在的组件 */}
          <XInShou/>
          {/* 前沿技术所在的组件 */}
          <JiNeng/>
          {/* 前沿技术所在的组件 */}
          <QianYan/>
          {/* 精彩手记及猿问所在的组件 */}
          <ShouJi/>
          {/* 慕课精英名师所在的组件 */}
          <MingShi/>
          {/* 吊炸天全明星所在的组件 */}
          <DiaoZha/>            
      </div>
    );
  }
}
export default Main;