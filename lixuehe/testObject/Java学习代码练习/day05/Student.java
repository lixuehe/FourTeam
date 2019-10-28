package day05;
/*
    提示用户输入班级的学生人数以及每个学生的信息，学生的信息有：学号、姓名、
    年龄，最后分别打印出来。
    提示：Student[] arr = new Student[num];
*/
//封装一个学生类
public class Student {
    private int id;
    private String name;
    private  int age;

    public Student() {
    }

    public Student(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
        System.out.println("姓名："+name+"，年龄："+age+"学号："+id);
    }
}
