import React, { Component } from 'react';
import './App.css';
import Header from './header/js/Header';
import Main from './main/Main';
import Footer from './footer/js/Footer';
import Ce from './ce/Ce';

// 整个页面的大组件
class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* header 标题栏 */}
          <Header/>
          {/* main 主体内容 */}
          <Main/>
          {/* footer 链接栏 */}
          <Footer/>
          {/* ce 侧边固定 */}
          <Ce/>
      </div>
    );
  }
}
export default App;
