import React, { Component } from 'react';
import ajax from '../Ajax/index';
import Button from '../button/index';
import Star from '../Star/index';
import '../App/index.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        arr:[1,2,3,4,5]
      } 
    }
  componentDidMount(){ 
    var num = 5;
    ajax("/some.txt","GET",null,function(result)
      {num = result.substring(result.lastIndexOf(":")+1, result.length);}) 
    this.setState({
      index: num
    })
  }
  onClickMe(index){          
      {index >=0 ?ajax("http://localhost:8080/","POST","i:"+index,function(){alert("确定点亮"),this.setState({index:index})}.bind(this)):ajax("http://localhost:8080/","POST","i:"+index,function(){alert("确定清除"),this.setState({index:index})}.bind(this))}
  }
  render() {
      return (
        <span>
        {this.state.arr.map((index)=>
          <Star onClick={()=>this.onClickMe(index)} key={index}>{index <=this.state.index ? <span className="span">★</span>:<span className="span">☆</span>}</Star>
          )}
        <Button onClick={()=>this.onClickMe(-1)} className="button-inline">点我清零</Button>
      </span>
      );
    }
}
export default App;

