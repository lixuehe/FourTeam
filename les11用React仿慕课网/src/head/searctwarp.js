import React, { Component } from 'react';

class Searctwarp extends Component{
    render() {
        return(
            <div className="search-warp clearfix" style={{height:"72px"}}>
                <div className="pa searchTages">
                    <a href="https://class.imooc.com/sc/64" target="_blank">Java入门</a>
                    <a href="https://class.imooc.com/sc/53" target="_blank">前端入门</a>
                </div>
                <div className="search-area">
                    <input className="search-input" data-suggest-trigger="suggest-trigger" type="text"
                           autoComplete="off"/>
                        <input type="hidden" className="btn_search" data-serch-btn="search-btn"/>
                            <div className="search-area-result">
                            </div>
                </div>
                <div className="showhide-search">
                    <span className="icon-search">
                        <svg t="1567128950537" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1796" width="14" height="14">
                            <path d="M1002.656 938.656 1024 960 960 1024 938.656 1002.656 640 704 639.712 703.712C572.352 757.184 487.328 789.344 394.656 789.344 176.704 789.344 0 612.64 0 394.656 0 176.704 176.704 0 394.656 0 612.64 0 789.344 176.704 789.344 394.656 789.344 487.328 757.184 572.352 703.712 639.712L704 640 1002.656 938.656ZM394.656 64C212.032 64 64 212.032 64 394.656 64 577.28 212.032 725.312 394.656 725.312 577.28 725.312 725.344 577.28 725.344 394.656 725.344 212.032 577.28 64 394.656 64Z"
                                p-id="1797" fill="#8a8a8a">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        )
    }
}
export default Searctwarp;