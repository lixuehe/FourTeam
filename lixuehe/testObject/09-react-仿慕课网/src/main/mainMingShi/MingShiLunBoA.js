import React, { Component } from 'react';

// 轮播图中的每个小的div的大组件
class MingShiLunBoA extends Component {
  
  render() {
    return (
        <div id="tou1" className="swiper-slide">
            <img  className="tou1" src={require('./imgs'+this.props.item.img)}/>
            <span className="imgms1p1" title="7七月">{this.props.item.span1}</span>
            <span className="imgms1p2">{this.props.item.span2}</span>
            <span className="imgms1p3" title={this.props.item.span3}>
                {this.props.item.span3}</span>
        </div>
    );
  }
}
export default MingShiLunBoA;