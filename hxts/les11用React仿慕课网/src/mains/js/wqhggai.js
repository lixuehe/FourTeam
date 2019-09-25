import React, { Component } from 'react';
import Wqhg from "./wqhg";

class Wqhggai extends Component{
    render() {
        return(
            <dd className="item" style={{left:this.props.item.left,top:this.props.item.top}}>
                <label className="topic-label">{this.props.item.label}</label>
                <div className="clearfix topic-period">
                    <a href="https://www.imooc.com/wenda/issuedetail/27" target="_blank"
                       className="big-tit l">
                        {this.props.item.a1}<br/>
                        {this.props.item.a2}
                    </a>
                    <img src={require('./../images/'+this.props.item.img)} className="r" alt="r" />
                </div>
                <p className="topic-content">
                    {this.props.item.p1}
                </p>
                <div className="bottom-info clearfix">
                    <a href="https://www.imooc.com/wenda/issuedetail/27" target="_blank"
                       className="r green">
                        {this.props.item.a3}
                        <span className="icon-right">
                                   <svg t="1566895042570" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="2114" width="13.3" height="13.3">
                                       <path
                                           d="M502.88 85.104l-56.576 56.64L768.352 464H96v80h672.352L446.304 865.824l56.56 56.464 418.624-418.656z"
                                           fill="#1afa29" p-id="2115"></path>
                                   </svg>
                               </span>
                    </a>
                </div>
                <div className="tit-line">
                    <span>{this.props.item.span1}</span>
                </div>
                <div className="review-topic">
                    {this.props.item.wqhg.map(item => <Wqhg item={item}/>)}
                </div>
                <div className="bottom-info clearfix">
                    <a href="https://www.imooc.com/wenda/issue" target="_blank" className="r green">
                        更多往期话题
                        <span className="icon-right">
                                   <svg t="1566895042570" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="2114" width="13.3" height="13.3">
                                       <path
                                           d="M502.88 85.104l-56.576 56.64L768.352 464H96v80h672.352L446.304 865.824l56.56 56.464 418.624-418.656z"
                                           fill="#1afa29" p-id="2115"></path>
                                   </svg>
                               </span>
                    </a>
                </div>
            </dd>
        )
    }
}
export default Wqhggai;