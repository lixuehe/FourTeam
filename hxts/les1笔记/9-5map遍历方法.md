##### js中的map方法

1）定义：map方法是通过循环的方式一个一个项的处理原来的数据，并返回新的数组，同时不会改变原数组的值。

2）格式：array1.map(function(item,index,array1){},[thisValue]);

3)参数解释：

array1:要操作的原数组

item:当前数组循环操作到的项

index:当前数组循环操作到的项的序号

array1:当前操作的原始数组

thisValue:可选，如果指定前面function内部回调的this值=thisvalue.如果省略this=undefined

4)IE9以下不支持js的map方法