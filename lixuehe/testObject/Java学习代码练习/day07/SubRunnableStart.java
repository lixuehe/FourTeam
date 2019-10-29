package day07;

public class SubRunnableStart implements Runnable{
    @Override
    public void run() {
        for(int i=0;i<15;i++) {
            System.out.println("run 中的i="+i);
        }
    }
    public static void main(String[] args) {
        SubRunnableStart srs=new SubRunnableStart();
        Thread t2=new Thread(srs);
        t2.start();
        SubRunnableStart srs1=new SubRunnableStart();
        Thread t3=new Thread(srs1);
        t3.start();
        for(int i=0;i<15;i++) {
            System.out.println("---------------main中的i="+i);
        }
    }

}
