package day08;
//线程二负责打印1 ~ 100之间的所有偶数；
public class ThreadTest2 implements Runnable{
    @Override
    public void run() {
        System.out.println("0-100之间的偶数有：");
        for(int i=0;i<=100;i+=2) {
            System.out.println("------------i2="+i);
        }
    }
}
