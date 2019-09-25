import React, { Component } from 'react';

class Logo extends Component{
    render() {
        return(
            <div id="logo" className="logo">
                <a href="https://www.imooc.com/" target="_self" title="首页">
                    <img src={require('./../images/logo.png')} title="慕课网" alt="慕课网" />
                </a>
            </div>
        )
    }
}
export default Logo;