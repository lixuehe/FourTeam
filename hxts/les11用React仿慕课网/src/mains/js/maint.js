import React, { Component } from 'react';
import Bgff1 from "./bgff1";
import Bgff2 from "./bgff2";
import Bgff7 from "./bgff7";
import Bgff8 from "./bgff8";
import Bgff9 from "./bgff9";
import {context} from "../constants";


class Mains extends Component{
    render() {
        console.log("111");
        return(
            <div id="main">
                {/*轮播图*/}
               <Bgff1/>
               {/*实战推荐*/}
                {context.map(item => <Bgff2 item={item}/>)}
               {/*精彩手记及猿问*/}
               <Bgff7/>
              {/*精英讲师*/}
              <Bgff8/>
              {/*吊炸天全明星*/}
              <Bgff9/>
            </div>
        )
    }
}
export default Mains;