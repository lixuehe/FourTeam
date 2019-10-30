package day08;
//在main方法启动上述两个线程同时执行,主线程等待两个线程终止；
public class ThreaMainTest {
    public static void main(String[] args) {
        Thread tt1=new ThreadTest1();
        System.out.println("主线程开始等待。。。");
        tt1.start();
        ThreadTest2 tt2=new ThreadTest2();
        Thread tt3=new Thread(tt2);
        tt3.start();
        try {
            tt1.join();
            tt3.join();
            System.out.println("等待结束！");
        } catch (Exception e) {
            e.printStackTrace();
        }


    }
}
