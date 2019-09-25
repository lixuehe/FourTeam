import React, { Component } from 'react';

class Cebian extends Component{
    render() {
        return(
            <div className="menuContent">
                {this.props.cebian.map(function (item) {
                    return(
                        <div className={"item "+item.name} key={item.objectID} data-id="a">
                            <a href="javascript:void(0)">
                                <span className="group">{item.group}</span>
                                <img src={require('./../images/sort.png')}  alt="sort" />
                            </a>
                        </div>
                    )
                })}

            </div>
        )
    }
}
export default Cebian;