import React, { Component } from 'react';
import "./index.css"
import {header} from "../../constants/constant"
class Header extends Component{
    render(){
        return(
            <div className="header">          
                <img src={require("../../img/兄弟连1_01.png")}/>
                <p className="title1"><b>{header.header1}</b></p>
                <p className="title2"><b><span>{header.header2}</span>{header.header3}</b></p>
            </div>
        )        
    }
}
export default Header;
