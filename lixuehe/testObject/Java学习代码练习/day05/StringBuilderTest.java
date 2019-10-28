package day05;
//编程实现将“ABCD”转化为“A,B,C,D”
public class StringBuilderTest {
    public static void main(String[] args) {
        StringBuilder sb=new StringBuilder("ABCD");
//        for(int i=1;i<=5;i+=2) {
//            sb.insert(i, ",");
//        }
//        System.out.println(sb);
//        方式二：
//        StringBuilder sb2=new StringBuilder();
//        for(int i=0;i<sb.length();i++) {
//            char a=sb.charAt(i);
//            sb2.append(a+",");
//        }
//        sb2.deleteCharAt(sb2.length()-1);
//        System.out.println(sb2);
//      方式三：
        StringBuilder sb3=new StringBuilder();
        for(int i=0;i<sb.length();i++) {
            char a=sb.charAt(i);
            if(i==sb.length()-1) {
                sb3.append(a);
            }
            else {
                sb3.append(a+",");
            }
         }
        System.out.println(sb3);
    }

}
