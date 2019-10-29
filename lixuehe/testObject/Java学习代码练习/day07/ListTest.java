package day07;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

//声明一个List集合放入11、22、33、44、55，分别使用4种方式遍历。
public class ListTest {
    public static void main(String[] args) {
        List<Integer> list1=new LinkedList<Integer>();
        for(int i=1;i<=5;i++) {
            list1.add(i*11);
        }
//        方式一
        System.out.println("集合中的元素是:"+list1);
//        方式二
        System.out.println("------------------------------");
        System.out.print("集合中的元素有：");
        for(int i=0;i<list1.size();i++) {
            System.out.print(list1.get(i)+" ");
        }
        System.out.println();
//        方式三
        System.out.println("------------------------------");
        System.out.print("集合中的元素有：");
        Iterator it=list1.iterator();
        while(it.hasNext()) {
            System.out.print(it.next()+" ");
        }
        System.out.println();
        System.out.println("------------------------------");
        System.out.print("集合中的元素有：");
        for (Integer i:list1) {
            System.out.print(i+" ");
        }
    }


}
