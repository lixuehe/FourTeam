import React, { Component } from 'react';

class Toutus extends Component{
    render() {
        return(
            <div key={this.props.item.objectID}>
                <div className="adsense-box l" style={{background: `url(${require("./../images/"+this.props.item.data)})`}}>
                    <a target="_blank"
                       href="https://www.imooc.com/topic/xiaochengxu?mc_marking=e417a314a03d64868f37b74caf976b1c&mc_channel=syzt1">
                        <h3 className="ellipsis">{this.props.item.title}</h3>
                        <p className="ellipsis">{this.props.item.ellipsis}</p>
                    </a>
                </div>
            </div>
        )
    }
}
export default Toutus;