package day08;
//冒泡算法的实现
public class SortTest {

    public  static void bubble(int[] arr) {
//        使用外层循环控制比较的轮数
//        使用内层循环用于控制当前轮中的比较的次数
        for(int i=1;i<arr.length;i++) {
            for(int j=0;j<arr.length-i;j++)  {
                if(arr[j]>arr[j+1]) {
                    int temp =arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }
    public static void main(String[] args) {
        int[] brr={12,23,21,34,32,45,43,56,54,76,32};
           SortTest.bubble(brr);
        System.out.println("数组中的元素有：");
        for(int i=0;i<brr.length;i++) {
            System.out.print(brr[i]+" ");
        }
    }

}
