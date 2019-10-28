package day04;
//编程实现将“Good Good Study,Day Day Up ”中的所有day 的位置找到并打印；
public class Find {
    public static void main(String[] args) {
        String str="Good Good Study,Day Day Up";
        System.out.println(str);
//        方式一：
//        int num=str.indexOf("Day");
//        while(-1!=num) {
//            System.out.println("num="+num);
//            num=str.indexOf("Day",num+1);
//        }
//        方式二：
        int pos=0;
        while((pos=str.indexOf("Day",pos))!=-1) {
            System.out.println("pos:"+pos);
            pos+="Day".length();
        }
    }

}
