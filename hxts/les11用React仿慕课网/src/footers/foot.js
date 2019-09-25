import React, { Component } from 'react';
import $ from 'jquery';
import './foot.css';
import Foots from "./foots";
import {footer} from "../mains/constants";

class Footer extends Component{
    componentDidMount() {
        // 底部的微信公众号
        $(function () {
            $(".footer-sns-weixin").on("mouseover", function () {
                $(".footer-sns-weixin-expand").show();
                $("#footer").addClass("addZ-indexCode");
            });
        });
        $(function () {
            $(".footer-sns-weixin").on("mouseout", function () {
                $(".footer-sns-weixin-expand").hide();
                $("#footer").removeClass("addZ-indexCode")
            });
        });
    }
    render() {
        return(

            <div className="footer idx-minwind">
                {footer.map(item => <Foots item={item}/>)}
            </div>
        )
    }
}
export default Footer;