import React, { Component } from 'react';
import '../css/ul.css'
const UlList=[
    '免费课程',
    '实战课程',
    '就业班',
    '专栏',
    '猿问',
    '手记'
]
//  Ul组件
class Ul extends Component{
    render(){
        return(
        <ul id="ul">
            {UlList.map(item=>
                <li><a href="#">{item}</a></li>
            )}
            <span className="i"></span>
        </ul>
        
        )
    }
}
export default Ul;