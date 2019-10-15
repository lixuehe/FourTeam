import React, { Component } from 'react';

//  全是头像的div的复用组件
class DiaoZha1 extends Component {
  
  render() {
    return (
      <div id="dzyuantouDiv">
      {/* <!-- 皇冠 --> */}
      <div className={"dzyuantouDiv1 "+this.props.item.class1}>
      </div>
      {/* <!-- 头像 --> */}
      <div className={"dzyuantouDiv2 "+this.props.item.class2}>
      </div>
      {/* <!-- 介绍 --> */}
      <p id="dzyuantoup1">{this.props.item.p1}</p>
      <p id="dzyuantoup2">{this.props.item.p2}</p>  
  </div>  
    );
  }
}
export default DiaoZha1;
