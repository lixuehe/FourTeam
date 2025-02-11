import React, { Component } from 'react';

class Xqyw extends Component{
    render() {
        return(
            <dd className="item" style={{left:this.props.item.left,top:this.props.item.top}} key={this.props.item.objectID}>
                <label className="wenda-label green">
                       <span className="icon-yuanwen">
                           <svg t="1566917835612" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16365" width="15" height="15">
                               <path
                                   d="M673.1 60.3H348.6c-158.4 0-287.2 128.9-287.2 287.2V672c0 158.4 128.8 287.2 287.2 287.2h324.5c158.4 0 287.2-128.8 287.2-287.2V347.6c0-158.4-128.8-287.3-287.2-287.3zM903.6 672c0 127.3-103.2 230.5-230.5 230.5H348.6c-127.3 0-230.5-103.2-230.5-230.5V347.6c0-127.3 103.2-230.5 230.5-230.5h324.5c127.3 0 230.5 103.2 230.5 230.5V672z"
                                   fill="#1afa29" p-id="16366"></path>
                               <path
                                   d="M187.2 546.8c10.4 0 18.9-8.5 18.9-18.9V345.6c0-77.5 63.1-140.6 140.6-140.6h328.4c33 0 65.1 11.7 90.4 33 8 6.7 19.9 5.7 26.6-2.3 6.7-8 5.7-19.9-2.3-26.6-32.1-27-72.8-41.9-114.7-41.9H346.7c-98.4 0-178.4 80-178.4 178.4v182.3c0 10.4 8.4 18.9 18.9 18.9zM815.7 345.6V674c0 77.5-63.1 140.6-140.6 140.6H346.7c-77.5 0-140.6-63.1-140.6-140.6 0-10.4-8.5-18.9-18.9-18.9-10.5 0-18.9 8.5-18.9 18.9 0 98.4 80 178.4 178.4 178.4h328.4c98.4 0 178.4-80 178.4-178.4V345.6c0-10.5-8.5-18.9-18.9-18.9-10.5 0-18.9 8.5-18.9 18.9z"
                                   fill="#1afa29" p-id="16367"></path>
                               <path
                                   d="M658.3 438.4c0-81.3-66.1-147.5-147.5-147.5s-147.5 66.2-147.5 147.5c0 10.4 8.5 18.9 18.9 18.9 10.4 0 18.9-8.5 18.9-18.9 0-60.5 49.2-109.7 109.7-109.7s109.7 49.2 109.7 109.7c0 38.8-24.8 77.9-57.7 91.1-30.4 12.2-70.8 33.7-70.8 80.7 0 10.4 8.4 18.9 18.9 18.9 10.4 0 18.9-8.5 18.9-18.9 0-13.2 5.6-29 47.1-45.6 47.2-18.9 81.4-71.9 81.4-126.2zM510.9 673.5c-19.7 0-35.7 16-35.7 35.7 0 19.7 16 35.7 35.7 35.7 19.7 0 35.7-16 35.7-35.7 0-19.7-16-35.7-35.7-35.7z"
                                   fill="#1afa29" p-id="16368"></path>
                           </svg>
                       </span>{this.props.item.title}
                </label>
                <a href="https://www.imooc.com/wenda/detail/585755" target="_blank"
                   className="wenda-tit">{this.props.item.a1}</a>
                <div>
                    {this.props.item.p1? <p className="best-label">{this.props.item.p1}</p>:null}
                    {this.props.item.p2? <p className="wenda-content">{this.props.item.p2}</p>:null}
                    <div className="bottom-info clearfix">
                        <a href="https://www.imooc.com/wenda/detail/585755" target="_blank"
                           className="r green">
                            {this.props.item.a2}
                            <span className="icon-right">
                               <svg t="1566895042570" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2114" width="13.3" height="13.3">
                                   <path
                                       d="M502.88 85.104l-56.576 56.64L768.352 464H96v80h672.352L446.304 865.824l56.56 56.464 418.624-418.656z"
                                       fill="#1afa29" p-id="2115"></path>
                               </svg>
                               </span>
                        </a>
                    </div>
                </div>
            </dd>
        )
    }
}
export default Xqyw;