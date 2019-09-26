#### 组件的格式

```
<div id="red"></div>
<script type="text/babel">
class 类名 extends React.Component{
	render(){
		return(
            <div>
                Hello{this.props.name}
            </div>
		)
	}
}
ReactDOM.render(
	<类名 name=""/>,
	document.getElementById('red')
)
</script>
```

##### bind操作符合

```
this.foo = ::this.foo;
```

等同于下面的语句：

```
this.foo = this.foo.bind(this);
```

这里所使用的两个冒号：：操作符叫做bind操作符，虽然有babel插件支持这种写法，但是bind操作符可能不会成为ES标准语法的一部分，所有，虽然这种写法看起来很简洁，我们在书中并不使用它。