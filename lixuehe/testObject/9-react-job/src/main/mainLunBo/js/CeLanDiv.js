import React, { Component } from 'react';
import '../css/CeLanDiv.css'
class CeLanDiv extends Component{
    render(){
        return( 
            // <!-- 轮播侧拦点击出现div1 -->
            <div id="lunboLanHide"  className={this.props.lei} style={{display:'none'}}>
                <div id="lunboLanHide1">                
                    <div id="lunboLanHide11">
                        <p>{this.props.title1}</p>
                        <div id="lunboLanHide11a">
                            {this.props.lunboLanHide11aList1.map(item=>
                                <a>{item}</a>
                            )}
                        </div>
                    </div>
                    {this.props.title2 || this.props.lunboLanHide11aList2 ?
                        <div id="lunboLanHide11">
                            <p>{this.props.title2}</p>
                            <div id="lunboLanHide11a">
                                {this.props.lunboLanHide11aList2.map(item=>
                                    <a>{item}</a>
                                )}
                            </div>
                        </div>
                    :<div id="lunboLanHide12"></div>}
                    <div id="lunboLanHide13">
                         {/* <!-- 每一个1/2的div --> */}
                       
                        {this.props.lunboLanHideList.map(item=>
                        
                            <div id="lunboLanHideDiv">
                               <div id="lunboLanHideDivImg">
                                    <img src={require("/home/lixuehe/XdhFile/workspace/workspace/testObject/9-react-job/src/main/mainLunBo/imgs/lunboHideImgs"+item.img+".jpg")}/>
                                </div>                       
                                <div id="lunboLanHideDivH3"  title={item.h3}>
                                    <h3>{item.h3}</h3>
                                    <p>
                                        <span id="money">{item.span1}</span>
                                        <span className="red">{item.span2}</span>
                                        <span>{item.span3}</span>
                                        <span className="red">{item.span4}</span>
                                        <svg t="1566441852172" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4521" width="10" height="10"><path d="M512 561.152c-153.088 0-277.504-124.416-277.504-277.504 0-153.088 124.416-277.504 277.504-277.504s277.504 124.416 277.504 277.504c0 153.088-124.416 277.504-277.504 277.504z m0-478.72c-111.104 0-201.216 90.112-201.216 201.216 0 111.104 90.112 201.216 201.216 201.216s201.216-90.112 201.216-201.216c0-111.104-90.112-201.216-201.216-201.216z" fill="#2c2c2c" p-id="4522"></path><path d="M969.216 1012.736c-20.992 0-38.4-11.264-38.4-32.256 0-230.912-187.904-418.816-418.816-418.816s-418.816 187.904-418.816 418.816c0 20.992-16.896 32.256-38.4 32.256s-38.4-11.264-38.4-32.256c0-272.896 222.208-495.104 495.104-495.104s495.104 222.208 495.104 495.104c0.512 20.992-16.384 32.256-37.376 32.256z" fill="#2c2c2c" p-id="4523"></path><path d="M977.92 1013.248H45.568c-15.872 0-29.184-13.312-29.184-29.184v-7.68c0-15.872 13.312-29.184 29.184-29.184h931.84c15.872 0 29.184 13.312 29.184 29.184v7.68c0.512 15.872-12.8 29.184-28.672 29.184z" fill="#2c2c2c" p-id="4524"></path></svg>
                                        <span>{item.span5}</span>
                                    </p>
                                 </div>                       
                            </div>)}
                      </div>
                       
                </div>
            </div>
        )
    }
}
export default CeLanDiv;