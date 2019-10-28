package day04;

public class PersonTest {
    public static void main(String[] args) {
        Person p1=new Person("张飞",18);
        Person p2=new Person("关羽",19);
        Person p3=new Person("关羽",19);
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        System.out.println(p3==p2);//比较的地址
        System.out.println(p3.equals(p2));//比较的内容
        System.out.println(p2.hashCode());
        System.out.println(p3.hashCode());
    }
}
