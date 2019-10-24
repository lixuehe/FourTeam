package day03;

public class People {
    private String name;
    private int age;

    public People() {
        System.out.println("Person()");
    };
    public People(String name ,int age){
        setName(name);
        setAge(age);
        System.out.println("Person(String name,int age)");
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public void show() {
        System.out.println("名字："+getName()+"，年龄："+getAge());
    }
    public void eat(String food) {
        System.out.println("今天的饭真好吃！");
    }
    public void play(String game) {
        System.out.println("这个游戏真好玩");
    }

}
