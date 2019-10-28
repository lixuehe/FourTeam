package day05;

import java.util.LinkedList;
import java.util.List;

//编程实现 List集合的使用
public class ListTest {
    public static void main(String[] args) {
//       准备一个list集合并向集合内添加元素
        List lt=new LinkedList();
        lt.add(new String("one"));
        lt.add(new Integer(1));
        lt.add(new Student(01,"张飞",18));
        System.out.println("集合中的元素有："+lt);
        System.out.println("--------------------------------'");
//        取出集合中的元素并打印
        String str= (String) lt.get(0);
        System.out.println(str);
        for(int i=0;i<lt.size();i++) {
            System.out.println("集合中的元素是："+lt.get(i));
        }
        System.out.println("--------------------------------'");
//        实现list集合中元素的修改操作,修改后返回被修改的元素
        Student s1=(Student)lt.set(2,new Integer(2));
        System.out.println("集合中的元素有："+lt);
//        实现集合中元素的删除操作
        String str1= (String) lt.remove(0);
        System.out.println("被删除的元素是:"+str1);
        System.out.println("删除后的集合是："+lt);
        StringBuilder sb1=new StringBuilder();
        sb1.append("[");
        for(int i=0;i<lt.size();i++) {
            Object obj=lt.get(i);
            if(i==lt.size()-1) {
                sb1.append(obj+"]");
            }
            else {
                sb1.append(obj+",");
            }
        }
        System.out.println("删除元素后的心集合是："+sb1);
        System.out.println("----------------------");
        List lt2=lt.subList(0,1);
        System.out.println("截取后的集合是："+lt2);
        lt2.set(0,new String("a"));
        System.out.println("lt2="+lt2);
        System.out.println("lt1="+lt);
    }



}
