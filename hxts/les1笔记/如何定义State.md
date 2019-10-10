React 的核心思想是组件化的思想，应用由组件搭建而成，而组件中最重要的概念是State（状态），State是一个组件的UI数据模型，是组件渲染时的数据依据。





































## 一. 如何定义State

定义一个合适的State，是正确创建组件的第一步。

State必须能代表一个组件UI呈现的完整状态集，即组件的任何UI改变，都可以从State的变化中反映出来；

同时，State还必须是代表一个组件UI呈现的最小状态集，即State中的所有状态都是用于反映组件UI的变化，没有任何多余的状态，也不需要通过其他状态计算而来的中间状态。

组件中用到的一个变量是不是应该作为组件State，可以通过下面的4条依据进行判断：

1. 这个变量是否是通过Props从父组件中获取？如果是，那么它不是一个状态。
2. 这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。
3. 这个变量是否可以通过其他状态（State）或者属性(Props)计算得到？如果是，那么它不是一个状态。
4. 这个变量是否在组件的render方法中使用？如果**不是**，那么它不是一个状态。这种情况下，这个变量更适合定义为组件的一个普通属性，例如组件中用到的定时器，就应该直接定义为this.timer，而不是this.state.timer。

**请务必牢记，并不是组件中用到的所有变量都是组件的状态！**当存在多个组件共同依赖一个状态时，一般的做法是**状态上移**，将这个状态放到这几个组件的公共父组件中。





















## 二. State 与 Props 区别

除了State, 组件的Props也是和组件的UI有关的。他们之间的主要区别是：

1. State是可变的，是组件内部维护的一组用于反映组件UI变化的状态集合；

2. 而Props对于使用它的组件来说，是只读的，要想修改Props，只能通过该组件的父组件修改。



在组件**状态上移**的场景中，父组件正是通过子组件的Props, 传递给子组件其所需要的状态。



























## 三. 如何正确修改State

#### 1.不能直接修改State。

直接修改state，组件并不会重新重发render。例如：

```react
// 错误
this.state.title = 'React';
```

正确的修改方式是使用`setState()`:

```react
// 正确
this.setState({title: 'React'});
```

#### 2. State 的更新是异步的。

调用`setState`，组件的state并不会立即改变，`setState`只是把要修改的状态放入一个队列中，React会优化真正的执行时机，并且React会出于性能原因，可能会将多次`setState`的状态修改合并成一次状态修改。

所以不要依赖当前的State，计算下个State。



当真正执行状态修改时，依赖的this.state并不能保证是最新的State，因为React会把多次State的修改合并成一次，这时，this.state将还是这几次State修改前的State。



另外需要注意的事，同样不能依赖当前的Props计算下个状态，因为Props一般也是从父组件的State中获取，依然无法确定在组件状态更新时的值。



1.在组件生命周期中或者react事件绑定中，setState是通过异步更新的。
2.在延时的回调或者原生事件绑定的回调中调用setState不一定是异步的。

这个结果并不说明setState异步执行的说法是错误的，更加准确的说法应该是setState不能保证同步执行。

Dan Abramov也多次提到今后会将setState改造为异步的，从js conf中提到的suspend新特新也印证了这一点。



举个例子，对于一个电商类应用，在我们的购物车中，当我们点击一次购买数量按钮，购买的数量就会加1，如果我们连续点击了两次按钮，就会连续调用两次`this.setState({quantity: this.state.quantity + 1})`，在React合并多次修改为一次的情况下，相当于等价执行了如下代码：

```
Object.assign(
  previousState,
  {quantity: this.state.quantity + 1},
  {quantity: this.state.quantity + 1}
)
```

于是乎，后面的操作覆盖掉了前面的操作，最终购买的数量只增加了1个。

如果你真的有这样的需求，可以使用另一个接收一个函数作为参数的`setState`，这个函数有两个参数，第一个是当前最新状态（本次组件状态修改后的状态）的前一个状态preState（本次组件状态修改前的状态），第二个参数是当前最新的属性props。如下所示：

```
// 正确
this.setState((preState, props) => ({
  counter: preState.quantity + 1; 
}))
```

















#### 3. State 的更新是一个浅合并（Shallow Merge）的过程。

当调用setState修改组件状态时，只需要传入发生改变的State，而不是组件完整的State，因为组件State的更新是一个浅合并（Shallow Merge）的过程。例如，一个组件的状态为：

```
this.state = {
  title : 'React',
  content : 'React is an wonderful JS library!'
}
```

当只需要修改状态`title`时，只需要将修改后的`title`传给`setState`：

```
this.setState({title: 'Reactjs'});
```

React会合并新的`title`到原来的组件状态中，同时保留原有的状态`content`，合并后的State为：

```
{
  title : 'Reactjs',
  content : 'React is an wonderful JS library!'
}
```



















## 四. State与Immutable

React官方建议把State当作是不可变对象，一方面是如果直接修改this.state，组件并不会重新render；另一方面State中包含的所有状态都应该是不可变对象。当State中的某个状态发生变化，我们应该重新创建这个状态对象，而不是直接修改原来的状态。那么，当状态发生变化时，如何创建新的状态呢？根据状态的类型，可以分成三种情况：

#### 1. 状态的类型是不可变类型（数字，字符串，布尔值，null， undefined）

这种情况最简单，因为状态是不可变类型，直接给要修改的状态赋一个新值即可。如要修改count（数字类型）、title（字符串类型）、success（布尔类型）三个状态：

```react
this.setState({
  count: 1,
  title: 'Redux',
  success: true
})
```

#### 2. 状态的类型是数组

如有一个数组类型的状态books，当向books中增加一本书时，使用数组的concat方法或ES6的数组扩展语法（spread syntax）：

```react
// 方法一：将state先赋值给另外的变量，然后使用concat创建新数组
var books = this.state.books; 
this.setState({
  books: books.concat(['React Guide']);
})

// 方法二：使用preState、concat创建新数组
this.setState(preState => ({
  books: preState.books.concat(['React Guide']);
}))

// 方法三：ES6 spread syntax
this.setState(preState => ({
  books: [...preState.books, 'React Guide'];
}))
```

当从books中截取部分元素作为新状态时，使用数组的slice方法：

```react
// 方法一：将state先赋值给另外的变量，然后使用slice创建新数组
var books = this.state.books; 
this.setState({
  books: books.slice(1,3);
})

// 方法二：使用preState、slice创建新数组
this.setState(preState => ({
  books: preState.books.slice(1,3);
}))
```

当从books中过滤部分元素后，作为新状态时，使用数组的filter方法：

```react
// 方法一：将state先赋值给另外的变量，然后使用filter创建新数组
var books = this.state.books; 
this.setState({
  books: books.filter(item => {
    return item != 'React'; 
  });
})

// 方法二：使用preState、filter创建新数组
this.setState(preState => ({
  books: preState.books.filter(item => {
    return item != 'React'; 
  });
}))
```

注意不要使用push、pop、shift、unshift、splice等方法修改数组类型的状态，因为这些方法都是在原数组的基础上修改，而concat、slice、filter会返回一个新的数组。

#### 3. 状态的类型是普通对象（不包含字符串、数组）

3.1 使用ES6 的Object.assgin方法

```
// 方法一：将state先赋值给另外的变量，然后使用Object.assign创建新对象
var owner = this.state.owner;
this.setState({
  owner: Object.assign({}, owner, {name: 'Jason'});
})

// 方法二：使用preState、Object.assign创建新对象
this.setState(preState => ({
  owner: Object.assign({}, preState.owner, {name: 'Jason'});
}))
```

3.2 使用对象扩展语法（[object spread properties](https://link.jianshu.com/?t=https://github.com/sebmarkbage/ecmascript-rest-spread)）

```
// 方法一：将state先赋值给另外的变量，然后使用对象扩展语法创建新对象
var owner = this.state.owner;
this.setState({
  owner: {...owner, name: 'Jason'};
})

// 方法二：使用preState、对象扩展语法创建新对象
this.setState(preState => ({
  owner: {...preState.owner, name: 'Jason'};
}))
```

总结一下，创建新的状态对象的关键是，避免使用会直接修改原对象的方法，而是使用可以返回一个新对象的方法。当然，也可以使用一些Immutable的JS库，如[Immutable.js](https://link.jianshu.com/?t=https://github.com/facebook/immutable-js)，实现类似的效果。

那么，为什么React推荐组件的状态是不可变对象呢？一方面是因为不可变对象方便管理和调试，了解更多可[参考这里](https://link.jianshu.com/?t=http://redux.js.org/docs/faq/ImmutableData.html#benefits-of-immutability)；另一方面是出于性能考虑，当对象组件状态都是不可变对象时，我们在组件的`shouldComponentUpdate`方法中，仅需要比较状态的引用就可以判断状态是否真的改变，从而避免不必要的`render`调用。当我们使用React 提供的`PureComponent`时，更是要保证组件状态是不可变对象，否则在组件的`shouldComponentUpdate`方法中，状态比较就可能出现错误，因为`PureComponent`执行的是浅比较（比较对象的引用）。



























![image-20190919235221261](/Users/elin/Library/Application Support/typora-user-images/image-20190919235221261.png)





























![image-20190919235306846](/Users/elin/Library/Application Support/typora-user-images/image-20190919235306846.png)



































![image-20190919235011444](/Users/elin/Library/Application Support/typora-user-images/image-20190919235011444.png)



















![image-20190919235403845](/Users/elin/Library/Application Support/typora-user-images/image-20190919235403845.png)





















