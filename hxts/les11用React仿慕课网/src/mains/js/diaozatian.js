import React, { Component } from 'react';
import Type from "./type";
import Lead from "./lead";
import Other from "./other";

class Diaozatian extends Component{
    render() {
        return(
            <div className="container-types clearfix">
                {this.props.item.type.map(item => <Type item={item}/>) }
                <div className="star-list clearfix">
                    <dl className="lead-list clearfix">
                        {this.props.item.lead.map(item => <Lead item={item}/>) }
                    </dl>
                    <dl className="other-list clearfix">
                        {this.props.item.other.map(item => <Other item={item}/>) }
                    </dl>
                </div>
            </div>
        )
    }
}
export default Diaozatian;