package day08;
//线程一负责打印1 ~ 100之间的所有奇数；
public class ThreadTest1 extends Thread{

    @Override
    public void run() {
        System.out.println("0-100之间的奇数有：");
        for(int i=1;i<100;i+=2) {
            System.out.println("i1="+i);
        }
    }
}
