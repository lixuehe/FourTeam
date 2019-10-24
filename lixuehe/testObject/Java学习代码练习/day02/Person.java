public class Person {
    String name;
    int age;
    void show(){
        System.out.println("姓名是："+name+",年龄是："+age);
    }
    void setName(String name1){
        name=name1;
    }
    void setAge(int age1){
        age=age1;
    }
    String getName(){
        return name;
    }
    int getAge(){
        return age;
    }
    public static void main(String[] args) {
        Person p=new Person();
        p.name="张飞";
        p.age=18;
        p.show();
        System.out.println("-----------------------");
        p.setName("关羽");
        p.setAge(20);
        p.show();
        System.out.println("-----------------------");
        String newName=p.getName();
        int newAge=p.getAge();
        System.out.println("名字:"+newName+",年龄："+newAge);
    }
}

