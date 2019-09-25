import React, { Component } from 'react';
import './gotos.css';
import Gotudibu from "./gotodibu";
import {fanhui} from "../mains/constants";

class Goto extends Component{
    render() {
        return(
            <Gotudibu fanhui={fanhui}/>
        )
    }
}
export default Goto;