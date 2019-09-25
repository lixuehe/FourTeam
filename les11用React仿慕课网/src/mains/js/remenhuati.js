import React, { Component } from 'react';
import Wqhggai from "./wqhggai";
import Sjwz from "./sjwz";
import Xqyw from "./xqyw";

class Remenhuati extends Component{
    render() {
        return(
            <dl className="wonderful-list js-wonderful-list types-content" style={{height:"1420px"}}>
                {this.props.item.wqhggai.map(item => <Wqhggai item={item}/>)}
                {this.props.item.sjwz.map(item => <Sjwz item={item}/>)}
                {this.props.item.xgyw.map(item => <Xqyw item={item}/>)}

            </dl>
        )
    }
}
export default Remenhuati;