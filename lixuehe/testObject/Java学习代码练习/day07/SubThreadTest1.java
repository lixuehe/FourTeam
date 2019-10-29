package day07;
//线程的创建方式
public class SubThreadTest1 extends Thread{
    @Override
    public void run() {
        for(int i=0;i<15;i++) {
            System.out.println("------------run方法中的i="+i);
        }
    }
    public static void main(String[] args) {
        Thread t1=new SubThreadTest1();
        t1.start();
        System.out.println("主线程开始等待。。。");
        try {
            t1.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("终于等到");
        for( int i=0;i<15;i++) {
            System.out.println("main方法中的i="+i);
        }

    }
}
