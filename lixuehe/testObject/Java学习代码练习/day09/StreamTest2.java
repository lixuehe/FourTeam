package day09;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

public class StreamTest2 {
    public static void main(String[] args) {
//    a. 创建空的Stream对象
        Stream stream = Stream.empty();
        System.out.println(stream);   //java.util.stream.ReferencePipeline$Head@c818063
        System.out.println("------------------------");
//    b. 通过集合类中的stream或者parallelStream方法创建；
        List<String> list = Arrays.asList("a", "b", "c", "d");
        Stream listStream = list.stream();                   //获取串行的Stream对象
        Stream parallelListStream = list.parallelStream();   //获取并行的Stream对象
        System.out.println(listStream);              //java.util.stream.ReferencePipeline$Head@7d417077
        list.forEach(System.out::println);            // a  b  c   d
        System.out.println(parallelListStream);      //java.util.stream.ReferencePipeline$Head@7dc36524
        listStream.forEach(System.out::println);      // a  b  c   d
        System.out.println("------------------------");
//     c. 通过Stream中的of方法创建：
        Stream s = Stream.of("test");
        Stream s1 = Stream.of("a", "b", "c", "d");
        System.out.println(s);                             //java.util.stream.ReferencePipeline$Head@3cb5cdba
        System.out.println(s1);                            //java.util.stream.ReferencePipeline$Head@56cbfb61
        System.out.println("------------------------");
//      d. 通过Stream中的iterate方法创建：      iterate方法有两个不同参数的方法：
//        public static<T> Stream<T> iterate(final T seed, final UnaryOperator<T> f);
//        public static<T> Stream<T> iterate(T seed, Predicate<? super T> hasNext, UnaryOperator<T> next)
        List<Integer> lt=new ArrayList<Integer>();
        for(int i=1;i<=5;i++) {
            lt.add(i*11);
        }
        System.out.println(lt);    //  [11, 22, 33, 44, 55]
//        简化的forEach 方法
        lt.forEach (System.out::print);  //   1122334455
        System.out.println("---------------------------");
        /*
            随机生成10个Double元素的Stream并将其打印
            通过Stream中的generate方法创建
            与iterate中创建无限元素的Stream类似，不过它的每个元素与前一元素无关，
            且生成的是一个无序的队列。也就是说每一个元素都可以随机生成。
            因此一般用来创建常量的Stream以及随机的Stream等。
        */

        /*
        generate
            static <T> Stream<T> generate(Supplier<T> s)
            返回无限顺序无序流，其中每个元素由提供的Supplier 。 这适合于产生恒定流，随机元素流等
            参数类型
            T - 流元素的类型
            参数
            s -所述 Supplier生成的元素的
            结果
            一个新的无限顺序无序 Stream
        */
        Stream.generate(new Supplier<Double>() {
            @Override
            public Double get() {
                return Math.random();
            }
        }).limit(10).forEach(System.out::println);
//        以上diamante简化后的写法
        Stream.generate(() -> Math.random()).limit(10).forEach(System.out::println);

        System.out.println("--------------------------------");
        /**
         * 本示例表示从1开始组装一个序列，第一个是1，第二个是1+1即2，第三个是2+1即3..，直到10中止；
         * 也可简化成以下形式：
         *        Stream.iterate(1,
         *        n -> n <= 10,
         *        n -> n+1).forEach(System.out::println);
         * 写成以下方式是为简化理解
         */
        /*i
        terate:
            static <T> Stream<T> iterate(T seed,UnaryOperator<T> f)
            返回有序无限连续Stream由函数的迭代应用产生f至初始元素seed ，产生Stream包括seed ， f(seed) ， f(f(seed)) ，等
            第一元件（位置0在） Stream将是提供seed 。 对于n > 0 ，位置n的元素将是将函数f应用于位置n - 1的元素的n - 1 。

            参数类型
            T - 流元素的类型
            参数
            seed - 初始元素
            f - 要应用于前一个元素以生成新元素的函数
            结果
            一个新的顺序 Stream
         */
        Stream.iterate(1,
                new Predicate<Integer>() {
                    @Override
                    public boolean test(Integer integer) {
                        return integer <= 10;
                    }
                },
                new UnaryOperator<Integer>() {
                    @Override
                    public Integer apply(Integer integer) {
                        return integer+1;
                    }
                }).forEach(System.out::println);
        System.out.println("----------------");
        //    简化代码
        Stream.iterate(1,
                    n -> n <= 10,
                    n -> n+1).forEach(System.out::println);
        System.out.println("----------filter-------------");
        Stream<String> ss1=Stream.of("t1","t2","t3aa","aaa");
//        ss1.forEach(System.out::println);  和一下代码同时执行报错！
        ss1.filter(n->n.contains("t")).forEach(System.out::println);
        System.out.println("------------map---------------");
//      将一个String类型的Stream对象ss2中的每个元素添加相同的后缀.txt，
        Stream<String> ss2=Stream.of("t1","t2","t3aa","aaa");
        ss2.map(n->n.concat(".txt")).forEach(System.out::println);    //t1.txt    t2.txt      t3aa.txt      aaa.txt
//       要对一个String类型的Stream进行处理，将每一个元素的拆分成单个字母      flatMap对原Stream中的所有元素使用传入的Function进行处理，每个元素经过处理后生成一个多个元素的Stream对象
        System.out.println("------------flatMap------------------------");
        Stream<String> ss4 = Stream.of("test", "t1", "t2", "teeeee", "aaaa");
        ss4.flatMap(n -> Stream.of(n.split(""))).forEach(System.out::println);    //testt1t2teeeeeaaaa
//通过takeWhile查找”test”, “t1”, “t2”, “teeeee”, “aaaa”, “taaa”这几个元素中包含t的最长命中序列：
        System.out.println("-----------takeWhile-----------------------");
        Stream<String> ss5 = Stream.of("test", "t1", "t2", "teeeee", "aaaa", "aaa");
        ss5.takeWhile(n -> n.contains("t")).forEach(System.out::println);     //test t1 t2 teeeee
//        如果："test", "t1", "t2", "teeeee", "taaaa", "aaa"   结果是：test t1 t2 teeeee taaaa
//        如果是："test", "t1", "t2", "eeeee", "taaaa", "aaa"    结果是：test t1 t2
//通过dropWhile删除”test”, “t1”, “t2”, “teeeee”, “aaaa”, “taaa”这几个元素中包含t的最长命中序列：
        System.out.println("-----------dropWhile-----------------------");
        Stream<String> ss6 = Stream.of("test", "t1", "t2", "teeeee", "aaaa", "taaa");
        ss6.dropWhile(n -> n.contains("t")).forEach(System.out::println);     //aaaa taaa

    }

}
