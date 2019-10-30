package day08;

import java.util.function.Consumer;

public class ConsumerTest {

    public static void main(String args[]) {
//      举例Consumer，它是一个函数式接口，包含一个抽象方法accept，这个方法只有输入而无输出。
//      1.java8 之前定义对象
        Consumer c1=new Consumer() {
            @Override
            public void accept(Object o) {
                System.out.println(o);
            }
        };
//        调用接口中的方法打印
        c1.accept("c1");   // c1
//      2.针对函数式编程接口，可以这样定义：
        Consumer c2=(o)->{
            System.out.println(o);
        };
        c2.accept("c2");  // c2
/*
  原理分析：
        函数式编程接口都只有一个抽象方法，因此在采用这种写法时，编译器会将这段函数编译后当作该抽象方法的实现。
        如果接口有多个抽象方法，编译器就不知道这段函数应该是实现哪个方法的了。
        因此，->后面的函数体我们就可以看成是accept函数的实现。
*/
        Consumer c3=(o)-> System.out.println(o);
        c3.accept("c3");   //  c3s
        Consumer c4=System.out::println;
        System.out.println("---------------------");
//        addThen 的方法
        Consumer f = System.out::println;
        Consumer f2 = n -> System.out.println(n + "-F2");
        //执行完F后再执行F2的Accept方法
        f.andThen(f2).accept("test");   //test  test-F2
        System.out.println("-----------------------");
        //连续执行F的Accept方法
        f.andThen(f2).andThen(f).andThen(f2).accept("test1");  //test1  test1-F2  test1  test1-F2
  }

}