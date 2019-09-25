import React, { Component } from 'react';
import Card from "./card";
import Cebian from "./cebian";
import Dibu from "./dibu";

class Lunbo extends Component{
    render() {
        return(
            <div className="g-banner pr" data-ride="carousel" data-interval="3000">
                {this.props.item.cardlist.map(item => <Card item={item}/>)}
                <Cebian cebian={this.props.item.cebian}/>
                {this.props.item.photos.map(item => <Dibu item={item}/>)}
            </div>
        )
    }
}
export default Lunbo;