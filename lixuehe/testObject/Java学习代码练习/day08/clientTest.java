package day08;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class clientTest {
    public static void main(String[] args) {
        try {
            Socket s=new Socket("192.168.196.75",8080);
            System.out.println("连接服务器成功！");
            BufferedReader br=new BufferedReader(new InputStreamReader(s.getInputStream()));
            PrintStream ps=new PrintStream(s.getOutputStream());
            Scanner sc=new Scanner(System.in);
            while(true) {
                System.out.println("请输入您要发送的内容：");
                String str=sc.next();
                ps.println(str);
                if("bye".equalsIgnoreCase(str)) {
                    System.out.println("聊天结束！");
                    break;
                }
                String msg=br.readLine();
                System.out.println("服务器发来的消息是："+msg);
            }
            br.close();
            ps.close();
            sc.close();
            s.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
