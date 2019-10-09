import React, { Component } from 'react';
import "./index.css"
import Reason from './components/Reason/index';
import WorkPlace from './components/WorkPlace/index';
import BreakIce from './components/BreakIce/index ';
import Really from './components/Really/index';
import Object1 from './components/Object/index';
import XiOngDi from './components/XiongDi/index';

class Main extends Component{
    render(){
        return(
            <div className="main">  
                 {/* 选择我们的三个理由 */}
                <Reason/>
                {/* IT行业就业、职场痛点*/}
                <WorkPlace/>
                {/* 解决∏人才供需矛盾的破冰者*/}
                <BreakIce/>
                {/* 解决∏人才供需矛盾的破冰者*/}
                <Really/>
                {/* 六大学科融会贯通*/}
                <Object1/>
                {/* 关于兄弟会应该知道的事*/}
                <XiOngDi/>
            </div>
        )        
    }
}
export default Main;
