import React, { Component } from 'react';

class Dibu extends Component{
    render() {
        return(
            <div className="g-banner-content">
                <div className="g-banner-box">
                    <div id="myCarousel" className="carousel slide">
                        <ol className="carousel-indicators">
                            {this.props.item.myCarousel.map(function (item) {
                                return(
                                    <li data-target={item.target} data-slide-to={item.slide} className={item.name}></li>
                                )
                            })}
                        </ol>
                        <div className="carousel-inner">
                            {this.props.item.photo.map(function (item) {
                                return(
                                    <div className={"item "+item.name}>
                                        <img src={require('./../images/'+item.img)}  alt="First slide" />
                                    </div>
                                )
                            })}
                        </div>
                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true">
                                    </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button"
                           data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true">
                                    </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                <div className="path-banner clearfix">
                    {this.props.item.tit.map(function (item) {
                        return (
                            <a href="#" target="_blank" className={item.ljtj}>
                                <i className={item.web}>
                                </i>
                                <div>
                                    <p className="tit">{item.tit}</p>
                                    <p className="desc">{item.desc}</p>

                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Dibu;