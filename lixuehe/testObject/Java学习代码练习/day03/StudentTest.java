package day03;

import java.util.Scanner;

public class StudentTest {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        System.out.println("请输入学生人数");
        int num=sc.nextInt();
        Student[] arr=new Student[num];
        for(int i=0;i<num;i++) {
            System.out.println("请输入第"+(i+1)+"个学生的信息：学号，姓名，年龄");
            int id=sc.nextInt();
            String name=sc.next();
            int age=sc.nextInt();
            arr[i]=new Student(id,name,age);
        }
        for(int i=0;i<arr.length;i++) {
            arr[i].show();
        }

    }
}
