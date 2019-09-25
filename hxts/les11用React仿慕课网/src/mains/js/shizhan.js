import React, { Component } from 'react';
import Type from "./type";
import Xiaoshizhan from "./xiaoshizhan";
import Toutus from "./toutus";
class Shizhan extends Component{
    render() {
        return(
                <div className="container-types clearfix">
                    {this.props.item.type.map(item => <Type item={item}/>) }
                    <div className="clearfix types-content">
                        {this.props.item.toutu ? this.props.item.toutu.map(item => <Toutus item={item}/>):null}
                        {this.props.item.shizhan.map(item => <Xiaoshizhan item={item}/>) }

                    </div>
                </div>
        )
    }
}
export default Shizhan;