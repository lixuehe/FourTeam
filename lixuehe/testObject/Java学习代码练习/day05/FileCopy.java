package day05;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

//编程实现使用字节输出流和字节输入流实现文件的拷贝功能
public class FileCopy {

    public static void main(String[] args) throws Exception {
        FileInputStream fis=new FileInputStream("/home/lixuehe/a.txt");
        FileOutputStream fos=new FileOutputStream("/home/lixuehe/b.txt");
        Date date1=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
        String dateStr=sdf.format(date1);
        System.out.println("开始时间是："+dateStr);
        //    方式一：
//;        int res=0;
//        while((res=fis.read())!=-1) {
//            fos.write(res);
//        }
        //    方式二：
//        int size=fis.available();
//        byte[] arr=new byte[size];
//        fos.write(arr);
        //    方式三：
        byte[] brr=new byte[1024*8];
        int res=0;
        while((res=fis.read())!=-1) {
            fos.write(brr,0,res);
        }
        date1=new Date();
        dateStr=sdf.format(date1);
        System.out.println("运行结束时间："+dateStr);
        System.out.println("结束拷贝！");
        fos.close();
        fis.close();
    }
}
