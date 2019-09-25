import React, { Component } from 'react';

class Card extends Component{
    render() {
        return(
            <div className={"submenu hide "+this.props.item.hides} data-id="a">
                <div className="innerBox clearfix">
                    <div className="subinnerBox">
                        <div className="cates-box">
                            <div className="fe-base-box clearfix">
                            <div className="banner-line">
                                <span className="bold mr10 l small-title">{this.props.item.title}</span>
                            </div>
                                    <div className="tag-box l">
                                        {this.props.item.content.map(function (item) {
                                            return (
                                                <a target="_blank" href="#">{item}</a>
                                            )
                                        })}
                                    </div>
                            </div>
                            {this.props.item.titles1 || this.props.item.contents1 ? <div className="fe-base-box clearfix">
                                <div className="banner-line">
                                    <span className="bold mr10 l small-title">{this.props.item.titles1}</span>
                                </div>
                                <div className="tag-box l">
                                    {this.props.item.contents1.map(function (item) {
                                        return (
                                            <a target="_blank" href="#">{item}</a>
                                        )
                                    })}
                                </div>
                            </div> :null}
                        </div>
                    </div>
                </div>
                <div className="recomment-box">
                    {this.props.item.card.map(function (item) {
                        return (
                            <div className="l banner-course-card" key={item.objectID}>
                                <a className="clearfix"
                                   href="https://coding.imooc.com/class/321.html?mc_marking=48ac65b3b1dcd8a47b6937c45bbf1865&mc_channel=shujuku3"
                                   target="_blank" title={item.title}>
                                    <img src={require('./../images/' + item.img)} className="l"
                                         alt="l"/>
                                    <div className="l course-card">
                                        <h3 className="course-card-name">{item.title}</h3>
                                        {item.price ? <div
                                            className="course-card-price l">{item.price}</div> : null}
                                        {item.dot1 ? <div className="course-card-dot l">
                                            <div className="imv2-dot_samll">{item.dot1}</div>
                                        </div> : null}
                                        <div className="course-card-info l">
                                            {item.info}
                                        </div>
                                        <div className="course-card-dot l">
                                            <div className="imv2-dot_samll">{item.dot2}</div>
                                        </div>
                                        <div className="course-card-info l">
                                            <svg t="1566539880475" className="icon"
                                                 viewBox="0 0 1024 1024"
                                                 version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg" p-id="18049"
                                                 width="10px" height="10px">
                                                <path
                                                    d="M486.4 563.2c-155.2896 0-281.6-126.3104-281.6-281.6s126.3104-281.6 281.6-281.6 281.6 126.3104 281.6 281.6-126.3104 281.6-281.6 281.6zM486.4 51.2c-127.0272 0-230.4 103.3728-230.4 230.4s103.3728 230.4 230.4 230.4c127.0272 0 230.4-103.3728 230.4-230.4s-103.3728-230.4-230.4-230.4z"
                                                    p-id="18050" fill="#707070"></path>
                                                <path
                                                    d="M896 1024l-819.2 0c-42.3424 0-76.8-34.4576-76.8-76.8 0-3.4816 0.7168-86.272 62.72-168.96 36.096-48.128 85.504-86.3744 146.8928-113.6128 74.9568-33.3312 168.0896-50.2272 276.7872-50.2272s201.8304 16.896 276.7872 50.2272c61.3888 27.2896 110.7968 65.4848 146.8928 113.6128 62.0032 82.688 62.72 165.4784 62.72 168.96 0 42.3424-34.4576 76.8-76.8 76.8zM486.4 665.6c-178.5344 0-310.272 48.7936-380.9792 141.1072-52.992 69.1712-54.1696 139.8784-54.2208 140.5952 0 14.0288 11.4688 25.4976 25.6 25.4976l819.2 0c14.1312 0 25.6-11.4688 25.6-25.6 0-0.6144-1.1776-71.3216-54.2208-140.4928-70.7584-92.3136-202.496-141.1072-380.9792-141.1072z"
                                                    p-id="18051" fill="#707070"></path>
                                            </svg>
                                            {item.path}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}
export default Card;