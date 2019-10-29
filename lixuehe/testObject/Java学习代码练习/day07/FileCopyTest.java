package day07;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class FileCopyTest {
    public static void main(String[] args) throws Exception{
//        构建文件输入流， 制定需要拷贝的文件
        FileInputStream fis=new FileInputStream("/home/lixuehe/1.jpg");
//        构建文件输出流，指定要拷贝到的文件目录
        FileOutputStream fos=new FileOutputStream("/home/lixuehe/2.jpg");
        System.out.println("开始拷贝文件。。。");
//        方式一拷贝，单字节读取
        /*int res=0;
        while((res=fis.read())!=-1){
            fos.write(res);
        }*/
//        方式二：按照文件实际大小拷贝
        int size=fis.available();
        System.out.println("获取到的文件大小是："+size);
        byte[] arr=new byte[size];
        int res=fis.read(arr);
        System.out.println("实际读取文件大小："+res);
        fos.write(arr);
//        方式三：指定每次拷贝的大小进行文件的拷贝
        /*byte[] brr=new byte[1024*8];
        int res=0;
        while((res=fis.read(brr))!=-1) {
            fos.write(brr,0,res);
        }*/
        System.out.println("拷贝结束!");
        fis.close();
        fos.close();

    }
}
