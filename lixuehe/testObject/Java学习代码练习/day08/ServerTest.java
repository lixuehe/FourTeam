package day08;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

//基于tcp 协议。实现服务器可以与多个客户端进行不断的通信，知道客户端回复bye
public class ServerTest {
    public static void main(String[] args) {
        try {
            ServerSocket ss=new ServerSocket(8080);
            while(true) {
                System.out.println("等待客户端的连接。。。");
                Socket s= ss.accept();
                System.out.println("客户端"+ ss.getInetAddress()+"连接成功！");
//                针对每一个连接上来的客户端都要开辟新的线程
                new ServerThread(s).start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
