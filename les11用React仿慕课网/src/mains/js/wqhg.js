import React, { Component } from 'react';

class Wqhg extends Component{
    render() {
        return(
            <div className="clearfix topic-period">
                <a href="https://www.imooc.com/wenda/issuedetail/26" target="_blank"
                   className="big-tit l">
                    {this.props.item.title1}<br/>
                    {this.props.item.title2}
                </a>
                <img src={require('./../images/'+this.props.item.image)} className="r" alt="r" />
            </div>
        )
    }
}
export default Wqhg;