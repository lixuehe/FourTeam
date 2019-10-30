package day08;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

//jdk1.8 日期的新方法
public class LocalDateTest {
    public static void main(String[] args) {
//      1.获取当前日期
        LocalDate nowDate = LocalDate.now();
        System.out.println("当前的时间是："+nowDate);   //当前的时间是：2019-10-30

//        2.获取具体的年月日
        int year = nowDate.getYear();
        int month = nowDate.getMonthValue();
        int day = nowDate.getDayOfMonth();
        System.out.println("提取年月日后拼接的日期是："+year+"年"+month+"月"+day+"日");   //提取年月日后拼接的日期是：2019年10月30日

//        3.设置时间
        LocalDate date1=LocalDate.of(2008,8,8);
        System.out.println("设置后的日期是："+date1);       //设置后的日期是：2008-08-08

//        4.获取当前时间的某个节点的时间,例如，在date 的基础上增加一年，减少一个月的时间
        LocalDate date2=date1.plusYears(1).minusMonths(1);
        System.out.println("获取到的新日期是："+date2);     //获取到的新日期是：2009-07-08

//        5.使用时区
        ZoneId nowZone = ZoneId.systemDefault();
        System.out.println("获取到的当前默认的时区："+nowZone);   //获取到的当前默认的时区：Asia/Shanghai
        LocalDateTime ldt = LocalDateTime.now();
        int hour= ldt.getHour();
        int min=ldt.getMinute();
        int sec=ldt.getSecond();
        System.out.println("当前地区的时间是："+ldt);            //当前地区的时间是：2019-10-30T20:14:35.257461
        System.out.println("得到的具体的时间点是："+hour+"点"+min+"分"+sec+"秒"); //得到的具体的时间点是：21点1分53秒
//        6.获取指定时区的时间
        ZoneId americaZid = ZoneId.of("America/New_York");
        LocalDateTime americaDateTime= LocalDateTime.now(americaZid);
        System.out.println("美国纽约的当前时间："+americaDateTime);    //美国纽约的当前时间：2019-10-30T08:14:35.262804

/*
    笔记：
        now：获取当前时间，获取某个地域的时间；
        of：创建对应的日期时间；
        parse:解析当前的日期时间；
        get:获取当前的日期时间；
        plus/minus：增减日期时间
*/
    }
}
