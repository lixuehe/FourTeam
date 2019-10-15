import React, { Component } from 'react';

// 占据1/2宽的div(手记下的div)
class MainDiv2 extends Component {
  
  render() {
    return (
        <div className={"shiZhanDiv1 "+(this.props.item.class)} id="xinshow">
            <h3>{this.props.item.h3}</h3>
            <p>{this.props.item.p}</p>
         </div> 
    );
  }
}
export default MainDiv2;