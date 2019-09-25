import React, { Component } from 'react';
import Type from "./type";
import Remenhuati from "./remenhuati";

class Shoujiyuanwen extends Component{
    render() {
        return(
            <div className="container-types">
                {this.props.item.type.map(item => <Type item={item}/>) }
                {this.props.item.shouji.map(item => <Remenhuati item={item}/>)}
            </div>
        )
    }
}
export default Shoujiyuanwen;