package day04;

import java.util.Scanner;

//编程实现账户登录测试
public class Login {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        for(int i=1;i<=3;i++) {
            System.out.println("请输入用户名和密码：");
            String name=sc.next();
            String pass=sc.next();
            if ("admin".equals(name) && "123".equals(pass)) {
                System.out.println("恭喜您，登录成功！");
                break;
            }if(3==i) {
                System.out.println("账户已冻结，请联系客服！");
            }
            else {
                System.out.println("您还有"+(3-i)+"次机会！");
            }

        }


    }
}
