import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//index.js--启动的文件（开始执行的入口）！
ReactDOM.render(
  // 加载App组件
  <App />,
  document.getElementById('root')
);
// 模块热替换，文件保存后自动刷新页面！
if(module.hot){
  module.hot.accept();
}
