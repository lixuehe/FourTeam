package day04;

import day03.Student;

public class StudentA {
    private int id;
    private String name;

    public StudentA() {
    }

    public StudentA(int id, String name) {
        this.id = id;
        this.name = name;
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
    public void show() {
        System.out.println("姓名："+getName()+"学号："+getId());
    }
    @Override
    public boolean equals(Object obj) {
        if(this==obj) return true;
        if(null==obj) return false;
        if(obj instanceof StudentA) {
           return this.getId()==((StudentA)obj).getId();
        }
        return false;
    }
//    为了使得hashCode 的方法和equals 方法的结果一致，所以进行重写；


    @Override
    public int hashCode() {
        int type=12;
        return type*31+getId();
    }

    @Override
    public String toString() {
        return "Student[id="+getId()+",name="+getName()+"]";
    }
}
