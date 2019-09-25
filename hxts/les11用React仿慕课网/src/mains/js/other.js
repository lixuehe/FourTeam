import React, { Component } from 'react';

class Other extends Component{
    render() {
        return(
            <div key={this.props.item.objectID}>
                <dd className={"other-item "+" "+this.props.item.dd+" "+(this.props.item.dd1? " "+this.props.item.dd1:null)}>
                    <a target="_blank" href="https://www.imooc.com/u/6299649">
                        <img src={require('./../images/'+this.props.item.image)} className={this.props.item.im} alt="k" />
                        <div className={"hide "+this.props.item.ab}>
                            <p className="title">{this.props.item.p1}</p>
                            <p className="nickname">{this.props.item.p2}</p>
                            <p className="desc">{this.props.item.p3}</p>
                            <span className="cur">{this.props.item.cur}</span>
                        </div>
                    </a>
                </dd>
            </div>
)
}
}
export default Other;