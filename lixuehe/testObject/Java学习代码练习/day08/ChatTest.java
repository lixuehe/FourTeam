package day08;

import java.io.*;

/*
    不断地提示用户输入要发送的内容，若发送的内容是"bye"则聊天结束，
    否则将用户输入的内容写入到文件c:/a.txt中。
    要求使用BufferedReader类来读取键盘的输入   System.in代表键盘输入
    要求使用PrintStream类负责将数据写入文件
*/
public class ChatTest {

    public static void main(String[] args) {
        try {
            BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
            PrintStream ps=new PrintStream(new FileOutputStream("/home/lixuehe/a.txt",true));
//            boolean flag=true;
            while(true) {
                System.out.println("请输入您要发送的内容：");
                String str = br.readLine();
                if("bye".equals(str)) {
                    System.out.println("聊天结束！");
                    break;
                }
                else{
                    ps.println(str);
                }
//                flag=!flag;
            }
            ps.close();
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
