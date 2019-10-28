package day04;

public class IntegerTest {
    public static void main(String[] args) {
        String str="123456";
//        System.out.println(str);
//        System.out.println(Integer.parseInt(str)*2);
        int res=0;
        for(int i=0;i<str.length();i++) {
            res=res*10+str.charAt(i)-'0';
        }
        System.out.println("转换结果为："+res);
    }
}
