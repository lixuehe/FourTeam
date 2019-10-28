package day06;
//使用StringBuilder类将字符串"ABCD"转换为"A,B,C,D"并打印出来。
public class StringBuilderTest {
    public static void main(String[] args) {
        StringBuilder sb1=new StringBuilder("ABCD");
//        方式一：
//        for(int i=1;i<=5;i+=2) {
//            sb1.insert(i,",");
//        }

//        方式二：
//            StringBuilder sb2=new StringBuilder();
//            for(int i=0;i<sb1.length();i++) {
//                char a=sb1.charAt(i);
//                sb2.append(a+",");
//            }
//            sb2.deleteCharAt(sb2.length()-1);
//        方式三：
        StringBuilder sb3=new StringBuilder();
        for(int i=0;i<sb1.length();i++) {
            char a=sb1.charAt(i);
            if(i==sb1.length()-1) {
                sb3.append(a);
            }else{
                sb3.append(a+",");
            }
        }
        System.out.println("拼接后的字符串是："+sb3);

    }
}
