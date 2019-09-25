import React, { Component } from 'react';
import '../css/yuanwen.css';
import Shoujiyuanwen from "./shoujiyuanwen";
import {sjyyw} from '../constants';

class Bgff7 extends Component{
    render() {
        return(
            <div className="bg000">
                {sjyyw.map(item => <Shoujiyuanwen item={item}/>)}
            </div>
        )
    }
}
export default Bgff7;