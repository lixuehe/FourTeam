import React, { Component } from 'react';
import '../css/lunbotu.css';
import $ from 'jquery';
import Lunbo from "./lunbo";
import {lunbo} from "../constants";

class Bgff1 extends Component{
    componentDidMount() {
        //轮播图左侧
//第一个
        $(function () {
            $(".aa").on("mouseover", function () {
                $(".a").removeClass("hide");
            })
            $(".aa").on("mouseout", function () {
                $(".a").addClass("hide");
            })
        });
        $(function () {
            $(".a").on("mouseover", function () {
                $(".a").removeClass("hide");
            });
            $(".a").on("mouseout", function () {
                $(".a").addClass("hide");
            });
        });
//第二个
        $(function () {
            $(".ab").on("mouseover", function () {
                $(".b").removeClass("hide");
            })
            $(".ab").on("mouseout", function () {
                $(".b").addClass("hide");
            })
        });
        $(function () {
            $(".b").on("mouseover", function () {
                $(".b").removeClass("hide");
            });
            $(".b").on("mouseout", function () {
                $(".b").addClass("hide");
            });
        });
//第三个
        $(function () {
            $(".ac").on("mouseover", function () {
                $(".c").removeClass("hide");
            })
            $(".ac").on("mouseout", function () {
                $(".c").addClass("hide");
            })
        });
        $(function () {
            $(".c").on("mouseover", function () {
                $(".c").removeClass("hide");
            });
            $(".c").on("mouseout", function () {
                $(".c").addClass("hide");
            });
        });
//第四个
        $(function () {
            $(".ad").on("mouseover", function () {
                $(".d").removeClass("hide");
            })
            $(".ad").on("mouseout", function () {
                $(".d").addClass("hide");
            })
        });
        $(function () {
            $(".d").on("mouseover", function () {
                $(".d").removeClass("hide");
            });
            $(".d").on("mouseout", function () {
                $(".d").addClass("hide");
            });
        });
//第五个
        $(function () {
            $(".ae").on("mouseover", function () {
                $(".e").removeClass("hide");
            })
            $(".ae").on("mouseout", function () {
                $(".e").addClass("hide");
            })
        });
        $(function () {
            $(".e").on("mouseover", function () {
                $(".e").removeClass("hide");
            });
            $(".e").on("mouseout", function () {
                $(".e").addClass("hide");
            });
        });
//第六个
        $(function () {
            $(".af").on("mouseover", function () {
                $(".f").removeClass("hide");
            })
            $(".af").on("mouseout", function () {
                $(".f").addClass("hide");
            })
        });
        $(function () {
            $(".f").on("mouseover", function () {
                $(".f").removeClass("hide");
            });
            $(".f").on("mouseout", function () {
                $(".f").addClass("hide");
            });
        });
//第七个
        $(function () {
            $(".ag").on("mouseover", function () {
                $(".g").removeClass("hide");
            })
            $(".ag").on("mouseout", function () {
                $(".g").addClass("hide");
            })
        });
        $(function () {
            $(".g").on("mouseover", function () {
                $(".g").removeClass("hide");
            });
            $(".g").on("mouseout", function () {
                $(".g").addClass("hide");
            });
        });
    }

    render() {
        return(
            <div className="bgfff banner-box">
                {lunbo.map(item => <Lunbo item={item}/>)}
            </div>
        )
    }
}
export default Bgff1;
