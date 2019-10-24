package day03;

//编程实现Person类的封装
public class Person {
    private String name;
    private int age;
    private static String country;

    public Person() {};
    public Person(String name,int age,String country) {
        setName(name);
        setAge(age);
        setCountry(country);
    }
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public String getCountry() {
        return country;
    }
    public void setName(String name) {
        this.name=name;
    }
    public void setAge(int age) {
        if(age>0 && age<150) {
            this.age=age;
        }
        else {
            System.out.println("年龄不合理！");
        }
    }
    public void setCountry(String country) {
        this.country=country;
    }
    public void show() {
        System.out.println("姓名："+getName()+",年龄："+getAge()+",国家："+getCountry());
    }

    public static void main(String[] args) {
//        有static 修饰的变量属于类层级，已加载，与创建对象无关
        System.out.println("国家是："+Person.country);
//        System.out.println("姓名是："+Person.name);直接报错，不是类层级
        Person p=new Person("张飞",18,"中国");
        p.show();
        Person p1=new Person("关羽",19,"法国");
        p1.show();
        p.country="蜀国";
        System.out.println(p.country);
        System.out.println(p1.country);

    }

}
