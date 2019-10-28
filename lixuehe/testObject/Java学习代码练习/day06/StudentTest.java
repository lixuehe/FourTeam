package day06;

import java.util.Arrays;
import java.util.Scanner;

/*
     首先输入学生人数，循环输入班级的学生信息，然后放入Student数组中，并打印所有姓zhang的学生信息。
     要求姓名用拼音(不要用汉字),学生所有信息用String格式输入，中间用逗号隔开。
     其中学生信息有：学号、姓名以及年龄。
*/
public class StudentTest {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
//        String[] drr={"01","zhangfei","12"};
//        Arrays.asList(drr).forEach(System.out::println);
        System.out.println("请输入学生人数：");
        int num=sc.nextInt();
        Student [] arr=new Student[num];
        for(int i=0;i<num;i++) {
            System.out.println("请输入第"+(i+1)+"个学生的信息：");
            String str=sc.next();
            String[] brr=str.split(",");
            int id=Integer.parseInt(brr[0]);
            String name=brr[1];
            int age=Integer.parseInt(brr[2]);
            Student s1=new Student(id,name,age);
            arr[i]=s1;
        }
        System.out.println("姓张的同学有：");
        for(int i=0;i<arr.length;i++) {
            if (arr[i].getName().startsWith("zhang")) {
                System.out.println(arr[i]);
            }
        }
        sc.close();

    }
}
