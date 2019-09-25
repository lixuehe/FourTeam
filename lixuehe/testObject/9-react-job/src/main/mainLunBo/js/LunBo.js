import React, { Component } from 'react';
import "../css/lunBo.css";
import LunBoCeLan from './LunBoCeLan';
import LunBoTu from './LunBoTu';
import LunBoLan2 from './LunBoLan2';
// 整个页面的大组件
class LunBo extends Component {
  render() {
    return (
      <div id="lunbo">
        <div id="lunbo1">
          {/* 轮播图侧边的黑色导航栏 */}
          <LunBoCeLan/>
          {/* 轮播图所在的右侧div */}
          <LunBoTu/>
          {/* 轮播图下边的低栏 */}
          <LunBoLan2/>
        </div>
    </div>
    );
  }
}
export default LunBo;