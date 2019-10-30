package day08;

import javax.sql.rowset.serial.SQLInputImpl;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class ServerThread extends Thread{
    private Socket s;
    public ServerThread(Socket s) {
        this.s=s;
    }
    @Override
    public void run() {
//        使用输入输出流进行通信
        try {
//            构建输入流用于读文件
            BufferedReader br=new BufferedReader(new InputStreamReader(s.getInputStream()));
//            构建输出流用于写文件
            PrintStream ps=new PrintStream(s.getOutputStream());
            Scanner sc=new Scanner(System.in);
            while(true) {
                String msg=br.readLine();
                System.out.println("客户端"+s.getInetAddress()+"说："+msg);
                if("bye".equals(msg)) {
                    System.out.println("客户端"+s.getInetAddress()+"已下线");
                    break;
                }
                System.out.println("请服务器回复：");
                String str=sc.next();
                ps.println(str);
            }
            ps.close();
            br.close();
            s.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
