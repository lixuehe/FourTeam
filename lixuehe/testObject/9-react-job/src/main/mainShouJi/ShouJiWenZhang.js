import React, { Component } from 'react';
class ShouJiWenZhang extends Component{
    render(){
        return( 
            <div class={"sj0 "+this.props.item.class}>
            <p>
                <svg t="1566612820653" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15172" width="12" height="12"><path d="M960 135.296v867.488c0 14.144-7.296 21.216-21.856 21.216H85.856C71.296 1024 64 1016.928 64 1002.784V21.216C64 7.072 71.296 0 85.856 0h712.96c14.592 0 21.856 7.072 21.856 21.216V867.52c0 14.144-7.264 21.216-21.856 21.216H135.04v50.4c3.616 12.384 10.912 18.56 21.824 18.56h712.96c14.592 0 21.888-7.936 21.888-23.872V114.08h46.432c14.56 0 21.856 7.04 21.856 21.216z m-827.712 21.216v169.792c0 14.144 8.192 21.216 24.576 21.216h570.944c14.56 0 21.856-7.072 21.856-21.216V156.48c0-14.144-7.296-21.216-21.856-21.216H156.864c-16.384 0-24.576 7.072-24.576 21.216z" fill="#0bb9cc" p-id="15173"></path></svg>
                <span>{this.props.item.span1}</span>
            </p> 
            {/* <!-- 带图片的div --> */}
            <div class="sjimg21">
                <div className="sjimg22">
                    <p className="sjimg2p">{this.props.item.p1}</p>
                </div>
                <div className="sjimg23">  
                    <img src={require('./imgs'+this.props.item.img)}/>                                
                </div> 
                <p className="sj1p2">{this.props.item.p2}</p>
                    <p id="sjimg2p2">
                        <span className="sjimg2ps">{this.props.item.span2}</span>
                        <span className="sjimg2ps">{this.props.item.span3}</span>
                        <span className="sjimg2ps3">{this.props.item.span4}></span>
                    </p>                               
            </div>
        </div>
        )
    }
}
export default ShouJiWenZhang;