##### sass基础

```
$sidebar-width  边栏宽度
$highlight-color  突出显示颜色
```

##### 变量名用中划线还是下划线分割；

`ass`的变量名可以与`css`中的属性名和选择器名称相同，包括中划线和下划线。这完全取决于个人的喜好，有些人喜欢使用中划线来分隔变量中的多个词（如`$highlight-color`），而有些人喜欢使用下划线（如`$highlight_color`）。使用中划线的方式更为普遍，这也是`compass`和本文都用的方式。

sass中，这两种用法相互兼容。

```
$link-color: blue;
a {
  color: $link_color;
}

//编译后

a {
  color: blue;
}
```

在上例中，`$link-color`和`$link_color`其实指向的是同一个变量。

##### 嵌套CSS规则

`css`中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要一遍又一遍地写同一个`ID`：

```
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```

像这种情况，`sass`可以让你只写一遍，且使样式可读性更高。在Sass中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。`sass`在输出`css`时会帮你把这些嵌套规则处理好，避免你的重复书写。

```
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

```
 /* 编译后 */
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```



##### Sass&Compass的受众

1.重构同学，写很多CSS,不知如何自动化

2.前端JS工程师，希望在项目周期内更好组织项目内容。



#### Sass的十大常用特性

1.节点）可嵌套性（这个是基础，用的太多太多了，必须掌握）

2. 变量：变量以$开头（通常网站会有基础变量，譬如基础字体，基础色调等，可以将他们赋值给一个变量，以后调用变量就好了，很类似js里的变量）

3. Mixins(混合@mixin)：可重用性高，可以注入任何东西
   注意点： 1.可以相互调用，但是不能拿自己调用自己，形成递归
       2.通过@include引用

   ```
   例子：
   @mixin banner {
   　　　width: 100%;
   　　　position: relative;
   　　　color: $deeepBlue;
   　　　.banner-content {
   　　　position: absolute;
   　　　top: 50px;
   　　　width: 100%;
   　　　　　　}
   　　　　}
   　.lead-banner {
   　　　　@include banner;
   　　　}
   ```

   ```
   编译后：
   .lead-banner {
     width: 100%;
     position: relative;
     color: blue;
   }
   .lead-banner .banner-content {
     position: absolute;
     top: 50%;
     width: 100%;
   }
   ```

   

4.@extend：允许一个选择器继承另一个选择器

```
例子：
.a1{
  color: blue;
}
.a2{
  @extend .a1;
  font-size: 12px;
}
```

```
编译后：
.a1, .a2 {
  color: blue;
}

.a2 {
  font-size: 12px;
}
```



5.@function:函数功能，用户使用@function可以去编写自己的函数（常用）
  使用语法： 使用 @function+函数名称，每个函数都需要有返回值的内容

```
例子：
@function du($r){
  @return $r*2
}
.a8{
  border: solid #{du(2)}px red;
}
```

```
编译后：
.a8 {
  border: solid 4px red; }
```



6.引用父元素&：在编译时，&将被替换成父选择符（常用）

```
例子：
a{
  font-size: 20px;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}
```

```
编译后：
a {
  font-size: 20px;
  text-decoration: none; 
  }
  a:hover {
    text-decoration: underline;
    }
```



7.计算功能（会用，但是用的不多）

```
例子：
p{
  margin:20px+30px;
  width:(100% / 6);
}
```

```
编译后：
p {
  margin: 50px;
  width: 16.66667%; 
}
```



8.组合连接： #{} ： 变量连接字符串（目前用到的是这个）

```
例子：
$name:foo;
$attr:border;
p.#{$name}{
  #{$attr}-color:blue;
}
```

```
编译后：
p.foo {
  border-color: blue; 
}
```

9.循环语句：（很少用到）

```
例子：
@for $i from 1 to 10{
  .a5_img#{$i}{
    background-image: url('images/img#{$i}.png');
  }
}
//$j:10;
//@while $j>0{
//  a5_img#{$j} {
//    background-image: url('images/img#{$j}.png');
//  }
//  $j:$j -1;
//}

@each $item in 1,2,3,4,5{
  .a5_img#{$item}{
    background-image: url("images/img#{$item}.png");
  }
}
```

```
编译后：
.a5_img1 {
  background-image: url("images/img1.png"); }

.a5_img2 {
  background-image: url("images/img2.png"); }

.a5_img3 {
  background-image: url("images/img3.png"); }

.a5_img4 {
  background-image: url("images/img4.png"); }

.a5_img5 {
  background-image: url("images/img5.png"); }

.a5_img6 {
  background-image: url("images/img6.png"); }

.a5_img7 {
  background-image: url("images/img7.png"); }

.a5_img8 {
  background-image: url("images/img8.png"); }

.a5_img9 {
  background-image: url("images/img9.png"); }

.a5_img1 {
  background-image: url("images/img1.png"); }

.a5_img2 {
  background-image: url("images/img2.png"); }

.a5_img3 {
  background-image: url("images/img3.png"); }

.a5_img4 {
  background-image: url("images/img4.png"); }

.a5_img5 {
  background-image: url("images/img5.png"); }

```



10.if语句：（很少用到）

```
@mixin bgcolor($b){
  @if($b==5){
    background-color: #ffff;
  }@else if($b==6){
    background-color: green;
  }@else {
    background: blue;
  }
}
```

总结1： 目前用的最多的或者个人觉得比较重要点，以后可能会用到的大概是这10个吧，sass还有其他的特性，这是我自己总结出来的觉得比较nice的。还有一点需要注意，引用sass是使用@import，sass编译有一个特点，就是当一个sass或scss的文件名以下划线_
         开头，那么这个文件就不会被编译。一般定义基础样式的时候会选择这个。

  　　总结2： sass与scss的区别：（其实是一种东西）
            　　　　1. scss是sass3引入的新语法，语法完全兼容css3， 继承了sass的功能
                        　　　　2. scss和sass大部分语法相同，唯一不同的是，scss需要使用分号和花括号，sass是以严格的缩进式语法缩写---换行和缩进
                        　　　　3. 文件扩展名不同