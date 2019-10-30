package day08;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Scanner;

public class ClientObjectTest {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try {
            Socket s = new Socket("192.168.196.75",8080);
            System.out.println("成功连接服务器。。");
//          将UserMessage 对象发送给服务器
            System.out.println("请输入用户名和密码");
            String userName=sc.next();
            String password=sc.next();
            UserMessage um=new UserMessage("check",new User(userName,password));
            ObjectOutputStream oos=new ObjectOutputStream(s.getOutputStream());
            oos.writeObject(um);
            System.out.println("客户端发送信息成功！");
//            接收服务器回复的消息并打印出结果
            ObjectInputStream ois=new ObjectInputStream(s.getInputStream());
            um =(UserMessage) ois.readObject();
            if("success".equals(um.getType())) {
                System.out.println("恭喜您，登录成功！");
            }
            else{
                System.out.println("用户名或者密码错误！");
            }
            s.close();
            oos.close();
            ois.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
