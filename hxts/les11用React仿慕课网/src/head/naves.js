import React, { Component } from 'react';
import {touli} from "../mains/constants";

class Naves extends Component{
    render() {
        return(
            <div>
            <ul className="nav-item">
                {touli.map(function (item) {
                    return(
                        <div key={item.objectID}>
                            <li><a href="#" target="_self">{item.title}
                                {item.icn? <i className="icn-new"></i>:null}
                            </a></li>
                        </div>
                    )
                })}
            </ul>
            </div>
        )
    }
}
export default Naves;