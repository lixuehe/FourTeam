import React, { Component } from 'react';
import Logo from "./logo";
import Naves from "./naves";
import Login from "./login";
import Searctwarp from "./searctwarp";
class Nav extends Component{
    render() {
        return(
            <div id="nav" className="page-container clearfix addZ-index" >
                <Logo/>
                <Naves/>
                <Login/>
                <Searctwarp/>
            </div>
        )
    }
}
export default Nav;
