import React, { Component } from 'react';

class Star extends Component{
    render(){
        const{
            onClick,
            children,
          }=this.props;
          return(
            <span onClick={onClick}>{children}</span>
            )
      }
     }
export default Star;