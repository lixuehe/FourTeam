import React, { Component } from 'react';
import "../css/footer.css";
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

// 标题栏组件
class Footer extends Component {
    render() {
      return(
        <div id="footer">
             <div  id="footer1">
                <FooterLeft/>
                <FooterRight/>
            </div>
        </div>
      );
    }
}  
export default Footer;