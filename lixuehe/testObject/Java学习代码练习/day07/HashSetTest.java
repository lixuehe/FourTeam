package day07;
import java.util.HashSet;
import java.util.Random;

//准备一个HashSet集合，实现生成10个1~20之间不重复的随机数放入集合并打印。
public class HashSetTest {
    public static void main(String[] args) {
        Random ra=new Random();
        HashSet<Integer> hs=new HashSet<Integer>();
//        方式一：
//        while(hs.size()<10) {
//            hs.add(ra.nextInt(19)+1);
//        }
//        方式二：
        for(int i=0;i<10;i++) {
            boolean b=hs.add(ra.nextInt(19)+1);
            if(!b) {
                i--;
            }
        }
        System.out.println(hs);
    }
}
