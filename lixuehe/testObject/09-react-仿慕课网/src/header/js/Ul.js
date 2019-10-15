import React, { Component } from 'react';
import '../css/ul.css'
import {header} from './constance'
//  Ul组件
class Ul extends Component{
    render(){
        return(
        <ul id="ul">
            {header.UlList.map(item=>
                <li><a href="#">{item}</a></li>
            )}
            <span className="i"></span>
        </ul>
        
        )
    }
}
export default Ul;