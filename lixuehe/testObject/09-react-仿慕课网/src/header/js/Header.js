import React, { Component } from 'react';
import "../css/header.css";
import Logo from './Logo';
import Ul from './Ul';
import Input from './Input';
import Login from './Login';

// 标题栏组件
class Header extends Component {
    render() {
      return(
          <div id="header">
            <Logo/>
            <Ul/>
            <Input/>
            <Login/>
        </div>
      );
    }
}  
export default Header;
