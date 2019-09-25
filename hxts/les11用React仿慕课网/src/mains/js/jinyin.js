import React, { Component } from 'react';

class Jinyin extends Component{
    render() {
        return(
            <div className="swiper-slide" key={this.props.item.objectID}>
                <a className="lecturer-item" href="#" target="_blank">
                    <img src={require('./../images/'+this.props.item.img)} title={this.props.item.img1} alt={this.props.item.img1} className="lecturer-uimg"  />
                    <span className="lecturer-name">{this.props.item.img1}</span>
                    <span className="lecturer-title">{this.props.item.span1}</span>
                    <span className="lecturer-p"
                          title={this.props.item.p}>
                                {this.props.item.p}
                            </span>
                </a>
            </div>
        )
    }
}
export default Jinyin;