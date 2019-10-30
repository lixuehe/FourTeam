package day08;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerBojectTest {
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(8080);
            System.out.println("等待客户端的连接。。。。。");
            Socket s=ss.accept();
            System.out.println("客户端连接成功！");
//            接收客户端发来的消息并判断是否正确
            ObjectInputStream ois=new ObjectInputStream(s.getInputStream());
            UserMessage um=(UserMessage) ois.readObject();
            if("admin".equals(um.getUser().getUserName()) && "123".equals(um.getUser().getPassword())) {
                um.setType("success");
            }
            else {
                um.setType("fail");
            }
//           回复客户端
            ObjectOutputStream oos=new ObjectOutputStream(s.getOutputStream());
            oos.writeObject(um);
//
            s.close();
            ss.close();
            oos.close();
            ois.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
