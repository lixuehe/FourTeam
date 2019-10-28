package day06;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

//声明一个List集合放入11、22、33、44、55，分别使用4种方式遍历。
public class ListPrintTest {
    public static void main(String[] args) {
        List<Integer> l1=new ArrayList<Integer>();
        for(int i=1;i<=5;i++) {
            l1.add(i*11);
        }
//        方式一遍历
        System.out.println(l1);
//        方式二遍历：
        System.out.println("-------------------------");
        System.out.println("集合中的元素有");
        for(int i=0;i<l1.size();i++) {
            System.out.print(l1.get(i)+" ");
        }
        System.out.println();
        System.out.println("-------------------------");
//        方式三遍历：
        for (Integer i:l1) {
            System.out.print(i+" ");
        }
        System.out.println();
        System.out.println("-------------------------");
//        方式四遍历：
        Iterator<Integer> it=l1.iterator();
        while (it.hasNext()) {
            System.out.print(it.next()+" ");
        }



    }
}
