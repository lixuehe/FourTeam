import React, { Component } from 'react';
import '../css/jinyin.css';
import Swiper from 'swiper/js/swiper';
import Jinyinmingshi from "./jinyinmingshi";
import {jyms} from "../constants";

class Bgff8 extends Component{
    render() {
        return(
            <div className="elite-bg">
                {jyms.map(item => <Jinyinmingshi item={item}/>)}
            </div>
        )
    }
componentDidMount() {
     new Swiper('.swiper-container', {
         autoplay:true,
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
}

export default Bgff8;