import React, { Component } from 'react';

//  全是头像的div的复用组件
class DiaoZha2 extends Component {
  
  render() {
    return (
        <dd id="yuantou2dd" className={this.props.item.class}>
            <img src={require('./imgs'+this.props.item.img)}/>
            <div className={this.props.item.class2} style={{display:"none"}}>
                <p className="title1">{this.props.item.p1}</p>
                <p className="nickname">{this.props.item.p2}</p>
                <p className="desc">{this.props.item.p3}</p>
                <span className="cur curzi">{this.props.item.span}</span>
            </div>
        </dd> 
    );
  }
}
export default DiaoZha2;
