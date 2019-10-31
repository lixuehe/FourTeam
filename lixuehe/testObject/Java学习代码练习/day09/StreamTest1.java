package day09;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamTest1 {
    public static void main(String[] args) {
        List<String> nameStrs= Arrays.asList("liming","xiaohong","Dany","langfei");
        System.out.println(nameStrs);    //[liming, xiaohong, Dany, langfei]
        /*
        asList:
        @SafeVarargs
        public static <T> List<T> asList(T... a)
        返回由指定数组支持的固定大小的列表。 （将返回的列表更改为“写入数组”。）该方法作为基于数组和基于集合的API之间的桥梁，与Collection.toArray()相结合 。 返回的列表是可序列化的，并实现RandomAccess 。
        此方法还提供了一种方便的方式来创建一个初始化为包含几个元素的固定大小的列表：

        List<String> stooges = Arrays.asList("Larry", "Moe", "Curly");
        参数类型
        T - 数组中对象的类
        参数
        a - 列表将被支持的数组
        结果
                指定数组的列表视图*/
        List<String> list=nameStrs.stream()
                .filter(s->s.startsWith("l"))
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
        System.out.println(list);      //[LANGFEI, LIMING]
        System.out.println("--------------------------");
//        使用Stream.of()的方法，将数组转换为管道流
        String[] array={"liming","xiaohong","Dany","langfei"};
        Stream<String> nameStrs2=Stream.of(array);
        Stream<String> nameStrs3=Stream.of("liming","xiaohong","Dany","langfei");
        System.out.println(nameStrs2);   //java.util.stream.ReferencePipeline$Head@2752f6e2
        System.out.println(nameStrs3);   //java.util.stream.ReferencePipeline$Head@e580929

    }
}
