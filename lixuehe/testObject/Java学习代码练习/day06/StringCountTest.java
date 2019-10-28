package day06;
//编程统计字符串"ABCD123!@#$%ab"中大写字母、小写字母、数字、其它字符的个数并打印出来
public class StringCountTest {
    public static void main(String[] args) {
        String str="ABCD123!@#$%ab";
        int[] arr=new int[4];
        for(int i=0;i<str.length();i++) {
            char a=str.charAt(i);
            if(a>='A'&&a<='Z') {
                arr[0]++;
            }
            else if(a>='a'&&a<='z') {
                arr[1]++;
            }
            else if(a>='0'&&a<='9') {
                arr[2]++;
            }
            else {
                arr[3]++;
            }
        }
        System.out.println("大写字母个数："+arr[0]+"\n小写字母个数："+arr[1]+"\n数字个数："+arr[2]+"\n其他字符个数："+arr[3]);
    }
}
