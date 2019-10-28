package day06;
//查找"Good Good Study, Day Day Up!"中day 出现的所有位置
public class DayTest {
    public static void main(String[] args) {
        String str="Good Good Study, Day Day Up!";
        int res=str.indexOf("Day");
//        方式一：
        while(res!=-1) {
            System.out.println(res);
            res=str.indexOf("Day",res+3);
        }
    }
}
