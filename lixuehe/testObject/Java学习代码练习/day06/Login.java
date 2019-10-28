package day06;

import java.util.Scanner;

//编程实现账户登录测试；
public class Login {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        for(int i=0;i<3;i++) {
            System.out.println("请输入用户名和密码：");
            String userName=sc.next();
            String userPass=sc.next();
            if("admin".equals(userName)&& "123".equals(userPass)) {
                System.out.println("恭喜您，登录成功！");
                break;
            }
            else if(i==2) {
                System.out.println("登录受限，请联系管理员！");
                break;
            }
            else {
                System.out.println("用户名或密码错误，您还有"+(2-i)+"次机会，请重新输入：");
            }
        }
    }
}
