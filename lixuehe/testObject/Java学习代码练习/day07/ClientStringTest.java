package day07;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class ClientStringTest {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try {
            //    1.创建Socket类型的对象病提供服务器的通信地址和端口号；
            Socket s = new Socket("192.168.196.75",8080);
            System.out.println("连接服务器成功！");
            //    2.使用输入输出流进行通信；
            //   s.getOutputStream() 返回值就是一个outPutSteam 的对象，用于输出流
            PrintStream ps=new PrintStream(s.getOutputStream());
            BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
            while(true) {
                System.out.println("客户端请说：");
                String msg = sc.next();
                ps.println(msg);
                if("bye".equals(msg)) {
                    System.out.println("聊天结束！");
                    break;
                }
                //接受服务器消息成功
                String str1 = br.readLine();
                System.out.println("服务器发来的内容是：" + str1);
                if("bye".equals(str1)) {
                    System.out.println("聊天结束！");
                    break;
                }
            }
            ps.close();
            s.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

//    3.关闭socket
}
