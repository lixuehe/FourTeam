package day09;

import java.util.function.Predicate;

public class PredicateTest {
    public static void main(String[] args) {
        Predicate<String> p = o -> o.equals("test");
        Predicate<String> g = o -> o.startsWith("t");

        /**
         * negate: 用于对原来的Predicate做取反处理；
         * 如当调用p.test("test")为True时，调用p.negate().test("test")就会是False；
         */
        System.out.println("-------------negate---------------");
        System.out.println(p.negate().test("test1"));   //true
        System.out.println(g.negate().test("test1"));   //false

        /**
         * and: 针对同一输入值，多个Predicate均返回True时返回True，否则返回False；
         */
        System.out.println("-------------and---------------");
        System.out.println(p.and(g).test("test"));     //true
        System.out.println(p.and(g).test("test1"));    //false

        /**
         * or: 针对同一输入值，多个Predicate只要有一个返回True则返回True，否则返回False
         */
        //Assert.assertTrue(p.or(g).test("ta"));
        System.out.println("-------------negate:---------------");
        System.out.println(p.or(g).test("test1"));   //true
        System.out.println(p.or(g).test("Test"));    //false
        System.out.println(p.or(g).test("test"));    //true
    }
}
