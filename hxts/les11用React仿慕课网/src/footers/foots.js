import React, { Component } from 'react';

class Foots extends Component{
    render() {

        return(
            <div className="container">
                <div className="footer-wrap idx-width">
                        {this.props.item.weibo.map(function (item) {
                            return(
                                <div className="footer-sns clearfix">
                                    <div className="l">
                                        <a href="javascript:void(0);" className="footer-sns-weixin" target="_blank" title="微信">
                                            <div className="footer-sns-weixin-expand" style={{display:item.sty}}>

                                            </div>
                                        </a>
                                        <p>{item.gzh}</p>
                                    </div>
                                    <div className="l">
                                    <a className="footer-sns-weibo hide-text" href="http://weibo.com/u/3306361973"
                                target="_blank" title="新浪微博">{item.xlwb}</a>
                                <p>{item.xlwb}</p>
                                </div>
                            </div>
                            )
                        })}
                </div>
                <div className="footer-link">
                    {this.props.item.link.map(function (item) {
                        return(
                            <a href="#" target="_blank" title={item}>{item}</a>
                        )
                    })}
                </div>
                <div className="footer-copyright">
                    <p>
                        <img draggable="false" className="moco-emoji" alt="©" src={require('./../images/a9.png')}/>&nbsp;2019&nbsp;imooc.com&nbsp;&nbsp;京ICP备 12003892号-11北京奥鹏文化传媒有限公司
                    </p>
                </div>
            </div>
        )
    }
}
export default Foots;