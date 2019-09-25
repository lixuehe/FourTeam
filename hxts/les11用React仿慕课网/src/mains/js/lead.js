import React, { Component } from 'react';

class Lead extends Component{
    render() {
        return(
            <div key={this.props.item.objetID}>
                <dd>
                    <div className="lead-item-photo">
                        <a target="_blank" href="https://www.imooc.com/u/6299649">
                            <img src={require('./../images/'+this.props.item.image)}  alt="k" />
                        </a>
                        <span className="purple"></span>
                    </div>
                    <p className="lead-item-name ellipsis">{this.props.item.p1}</p>
                    <p className="lead-item-tit">{this.props.item.p2}</p>
                </dd>
            </div>
        )
    }
}
export default Lead;