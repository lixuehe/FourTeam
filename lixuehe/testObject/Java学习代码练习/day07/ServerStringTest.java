package day07;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ServerStringTest {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try {
//          1.创建serveSocket 类型的对象病提供端口号
            ServerSocket ss=new ServerSocket(8080);
//          2.等待客户端的连接，调用accept 方法
            System.out.println("等待客户端连接....");
            Socket s= ss.accept();
            System.out.println("客户端连接成功！");
            BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
            PrintStream ps = new PrintStream(s.getOutputStream());
            while(true) {
//          3.使用输入输出流进行通信；
                String str1 = br.readLine();
                System.out.println("客户端发来的内容是：" + str1);
                if("bye".equals(str1)) {
                    System.out.println("聊天结束！");
                    break;
                }
//            当客户端给服务器发来消息时，服务器回复
                System.out.println("请服务器回复：");
                String msg = sc.next();
                ps.println(msg);
                if("bye".equals(msg)) {
                    System.out.println("聊天结束！");
                    break;
                }

            }
//          4.关闭socket
            br.close();
            s.close();
            ss.close();


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
