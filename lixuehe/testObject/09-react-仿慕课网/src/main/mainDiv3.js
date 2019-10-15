import React, { Component } from 'react';
import MainDiv from './mainDiv';
import MainDiv2 from './mainDiv2';

// 实战推荐，新上好课->前沿技术的五个div复用的div
class MainDiv3 extends Component {
    render() {
      return (
        <div id={this.props.id}>
            <div id={"shiZhan"}>
                <h3><i className="i12"></i>{this.props.title}<i className="i12"></i></h3>
                {this.props.XinShouList1==undefined? null : this.props.XinShouList1.map(item=>
                  <MainDiv2 item={item}/>
                )}
                <div id="shiZhanDiv">
                {this.props.XinShouList2.map(item=>
                   <MainDiv item={item}/>
                )}

                </div>
            </div>
        </div>
      );
    }
  }
  export default MainDiv3;