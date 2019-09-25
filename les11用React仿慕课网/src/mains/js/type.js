import React, { Component } from 'react';

class Type extends Component{
    render() {
        return(
            <div>
                <h3 className="types-title">
                    <span className={"tit-icon tit-icon-l"+" "+this.props.item.spanl}>
                    </span>
                    <span>{this.props.item.span}</span>
                    <span className={"tit-icon tit-icon-r"+" "+this.props.item.spanr}>
                    </span>
                </h3>
            </div>
        )
    }
}
export default Type;