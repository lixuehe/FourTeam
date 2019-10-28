package day05;

import java.util.LinkedList;
import java.util.Queue;

//编程实现Queue集合的使用
public class QueueTest {
    public static void main(String[] args) {
        Queue<Integer> q1=new LinkedList<Integer>();
        for(int i=0;i<=5;i++) {
            boolean b1=q1.offer(i*11);
            System.out.println("队列中的元素有："+q1);
        }
//        查看队首元素
        System.out.println("队首元素是："+q1.peek());
        for( int i=0;i<q1.size();i++) {
            System.out.println("依次出队的元素是："+q1.poll());
        }
        System.out.println("q1="+q1);

    }
}
