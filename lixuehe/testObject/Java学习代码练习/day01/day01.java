
import java.util.Scanner;
public class day01 {

    public static void main(String[] args) {

       Scanner sc =new Scanner(System.in);

//　　　　 编程实现helloworld的输出：
//        System.out.println("helloWorld");
//        System.out.println("--------------------");

//        编程实现姓名年龄的录入和输出
//        System.out.println("请输入您的姓名和年龄：");

//        String name=sc.next();
//        int age=sc.nextInt();
//        System.out.println("name="+name+",age="+age);
//        String name1 = "lll";
//        System.out.println(name1);
//        System.out.println("--------------------");

//        编程实现正整数秒数的拆分病并打印
//        System.out.println("请输入一个正整数的秒数");
//        int time=sc.nextInt();
//        int hour=time/3600;
//        int min=time/3600%60;
//        int sec=time%60;
//        System.out.println("拆分后的正整数是："+hour+"小时，"+min+"分钟，"+sec+"秒");
//        System.out.println("-------------------------");

//        编程实现判断用户输入的数值是正数、负数还是0
//        System.out.println("请输入一个整数");
//        int num=sc.nextInt();
//        if(num>0){
//            System.out.println("您输入的正数");
//        }
//        else if(num<0){
//            System.out.println("您输入的是负数");
//        }
//        else{
//            System.out.println("您输入的是0");
//        }
//        System.out.println("--------------------------");

//        编程运算1-1000之间的累加
//        int sum=0;
//        for(int i=0;i<=1000;i++){
//            sum+=i;
//        }
//        System.out.println("1-1000的和是："+sum);
//        System.out.println("--------------------------");

//        类型转换
//        byte a=127;
//        short b=128;
//        a=(byte)b;
//        System.out.println("a="+a+",b="+b);
//        System.out.println("--------------------------");

//        编程实现数组的增删改查
        int[] arr=new int[5];
        System.out.println("数组中的元素有：");
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("------给前4个元素赋值：11 22 33 44-----");
        for(int i=0;i<arr.length-1;i++){
            arr[i]=(i+1)*11;
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("------将55插入下标为0的位置，其他元素值依次后移-----");
        for(int i=4;i>0;i--){
            arr[i]=arr[i-1];
        }
        arr[0]=55;
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("------将数据55删除，后面元素依次向前移动-----");
        for(int i=0;i<arr.length-1;i++){
            arr[i]=arr[i+1];
        }
        arr[4]=0;
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("------查找元素内是否有22.如果有替换为220-----");
        for(int i=0;i<arr.length;i++){
            if(arr[i]==22){
                arr[i]=220;
                break;//可加可不加，不影响结果，但是如果添加break后，只要找到一个就跳出循环不再执行
            }
        }
        for (int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("--------------------------");

//        编程使用if分支结构找出4个整数中的最大值

    }
}
