import React, { Component } from 'react';
import '../css/logo.css'
//  logo 组件
class Logo extends Component{
    render(){
        return(
            <div className="logo">
                <img title="慕课网" src={require("../imgs/logo.png")}/>
            </div>     
        )
    }
}
export default Logo;