import React, { Component } from 'react';
import Nav from "./nav";
import './toubu.css';

class Head extends Component{
    render() {
        return(
            <div id="header">
               <Nav/>
            </div>
        )
    }
}
export default Head;