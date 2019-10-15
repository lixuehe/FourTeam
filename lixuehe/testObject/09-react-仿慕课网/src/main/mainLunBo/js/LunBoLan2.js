import React, { Component } from 'react';
import "../css/lunBoLan2.css";
// 整个页面的大组件
const lunBoLan2List=[
    {
        i:"i0",
        p1:'Web前端攻城狮',
        p2:'从未接触编程也可以学好'
    },
    {
        i:"i1",
        p1:'Java攻城狮',
        p2:'综合就业排名第一'
    },
    {
        i:"i2",
        p1:'Python攻城狮',
        p2:'应用领域最为广泛的语言'
    },
    {
        i:"i3",
        p1:'Android攻城狮',
        p2:'移动设备市场份额第一'
    },
    {
        i:"i4",
        p1:'大前端',
        p2:'5G时代热门职业'
    }
]

class LunBoLan2 extends Component {
  render() {
    return (
        <div id="lunboLan2">  
            {lunBoLan2List.map(item=>
                <span className="lunboLan2a">
                <i className={"i "+(item.i)}></i>
                <p className="p1">{item.p1}</p>
                <p className="p2">{item.p2}</p>                 
            </span>
            )}            
        </div>
    );
  }
}
export default LunBoLan2;