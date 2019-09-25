import React, { Component } from 'react';
import Type from "./type";
import Jinyin from "./jinyin";

class Jinyinmingshi extends Component{
    render() {
        return(
            <div className="container-types container-teacher-types clearfix">
                {this.props.item.type.map(item => <Type item={item}/>) }
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.props.item.jinyin.map(item => <Jinyin item={item}/>) }
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next">
                        <span>&gt;</span>
                    </div>
                    <div className="swiper-button-prev">
                        <span>&lt;</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Jinyinmingshi;