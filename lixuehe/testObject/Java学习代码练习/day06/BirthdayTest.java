package day06;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

//   提示用户按照指定的格式输入生日信息，计算距离1970年1月1日的天数并打印出来
//   如输入格式：1998年1月5日
public class BirthdayTest {
    public static void main(String[] args) throws Exception {
        Scanner sc=new Scanner(System.in);
        System.out.println("请输入您的生日：年月日");
        String birth =sc.next();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy年mm月dd日");
        Date date=sdf.parse(birth);
        long time=date.getTime();
        System.out.println("距离标准时间有："+(time/1000/3600+8)/24+"天");
    }
}
