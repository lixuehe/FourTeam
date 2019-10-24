import java.util.Random;
import java.util.Scanner;

public class day02 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Random ra =new Random();


//        System.out.println("--编程使用if分支结构找出4个整数中的最大值--");
/*        System.out.println("请输入四个整数：");
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        int d=sc.nextInt();

        int max=a;
        if (b>max){
            max=b;
        }
        if (c>max){
            max=c;
        }
        if (d>max){
            max=d;
        }
        System.out.println("最大值是："+max);

        System.out.println("--编程使用for循环实现聊天的模拟--");
        boolean flag=true;
        for (;;){
            System.out.println("请"+(flag?"小明说：":"小红说："));
            String chat =sc.next();
            if ("bye".equals(chat)){
                System.out.println("聊天结束");
                break;
            }
            else {
                System.out.println((flag?"小明说：":"小红说："));
            }
            flag=!flag;
        }*/


//     编程使用双重for循环打印*组成的图案

        /*System.out.println("----正方形----");
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("----直角三角形----");
        for(int i=0;i<6;i++){
            for(int j=0;j<i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("----直角三角形----");
        for(int i=6;i>0;i--){
            for(int j=0;j<i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("----等腰三角形----");
        for(int i=1;i<6;i++){
            for(int j=1;j<=5-i;j++){
                System.out.print("  ");
            }
            for(int j=0;j<2*i-1;j++){
                System.out.print("* ");
            }
            System.out.println();
        }*/

        /*System.out.println("-----编程实现将用户输入的三位数正整数逆序输出-----");
        System.out.println("请输入一个三位数的正整数：");
        int num=sc.nextInt();
        int num1=num/100;
        int num2=num%100/10;
        int num3=num%10;
        System.out.println("逆序排列输出为："+num3+num2+num1);*/

//        System.out.println("----编程实现任意位数正整数的逆序输出----");
        /*System.out.println("请输入一个正整数：");
        int number =sc.nextInt();
        System.out.println("逆序输出的结果是：");
        for (int i=number;i>0;i/=10) {
            int number1=i%10;
            System.out.print(number1+" ");
        }*/

        /*System.out.println("----编程实现三目运算符的使用，判断负数、正数还是零---");
        System.out.println("请输入一个整数");
        int num=sc.nextInt();
        System.out.println((num>0?"输入的是正数":(num<0?"输入的是负数":"输入的是0")));*/

        /*System.out.println("---编程使用for循环实现猜数字游戏的实现----");
        int a=ra.nextInt(100)+1;
        System.out.println("生成的随机数是："+a);
        System.out.println("请输入1-100之间的一个随机数");
        for (;;){

            int num=sc.nextInt();
            if(num>a){
                System.out.println("您猜大了，再猜一点吧1");
            }
            else if (num<a){
                System.out.println("您猜小了，再猜大一点吧！");
            }
            else {
                System.out.println("恭喜您，猜对了！");
                break;
            }
        }*/

        /*System.out.println("----编程实现双色球中奖号码的生成----");
        int[] arr = new int[7];
        for(int i=0;i<arr.length-1;i++){
            arr[i]=ra.nextInt(33)+1;
            for(int j=i-1;j>=0;j--){
                if(arr[i]==arr[j]){
                    i--;
                    break;
                }
            }
        }
        arr[arr.length-1]=ra.nextInt(16)+1;
        System.out.println("本期双色球中奖号码是：");
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }*/

        /*System.out.println("----编程实现三位数中所有水仙花数的打印----");
        for (int i=100;i<1000;i++){
            int a=i/100;
            int b=i%100/10;
            int c=i%10;
            if (i ==(a*a*a+b*b*b+c*c*c)){
                System.out.println(i);
            }
        }*/

        /*System.out.println("--- 编程使用双重for循环打印九九乘法表---");
        for (int i=1;i<=9;i++){
            for(int j=1;j<=i;j++){
                System.out.print(j+"*"+i+"="+i*j+"\t");
            }
            System.out.println();
        }*/

        /*声明一个初始值为11 22 33 44 55的一维数组并打印所有元素;
         声明一个长度为3元素类型为int类型的一维数组并打印所有元素
         实现将第一个数组中间3个元素赋值到第二个数组中
         再次打印第二个数组中的所有元素
         编程实现数组元素的复制并打印*/
        /*int[] arr={11,22,33,44,55};
        System.out.println("A数组的元素有：");
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        int[] brr=new int[3];
        System.out.println("B数组的元素有：");
        for(int i=0;i<brr.length;i++){
            System.out.print(brr[i]+" ");
        }
        System.out.println();
        System.out.println("-----------------");
        System.out.println("改变后的B数组的元素是：");
        for (int i=0;i<brr.length;i++){
            brr[i]=arr[i+1];
            System.out.print(brr[i]+" ");
        }*/

/*      System.out.println("----编程统计用户输入任意一个正整数中每个数字出现次数的统计并打印。----");
        System.out.println("请输入一个正整数");
        int num =sc.nextInt();
        //定义一个数组存放0-9数值出现的次数
        int[] arr =new int[10];
        //将用户输入的数据进行拆分为单个数字；
        for (int i=num;i>0;i/=10){
            int number =i%10;
            for (int j=0;j<10;j++){
                if(number==j){
                    arr[j]++;
                }
            }
        }
        for (int i=0;i<arr.length;i++){
            if(arr[i]>0) {
                System.out.println(i + "出现的次数是" + arr[i] + ",");
            }
        }*/
    }
}
