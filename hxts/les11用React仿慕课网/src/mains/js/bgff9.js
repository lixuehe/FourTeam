import React, { Component } from 'react';
import Diaozatian from "./diaozatian";
import {dzt} from "../constants";

class Bgff9 extends Component{
    render() {
        return(
            <div className="bgfff">
                {dzt.map(item => <Diaozatian item={item}/>)}
            </div>
        )
    }
}
export default Bgff9;