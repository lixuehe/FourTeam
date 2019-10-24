package day03;

//分别使用递归和递推的方式计算费氏数列中第n项数值并返回
public class FeiShi {

//    递推方式
//    递归方式
    int FeiShi(int num) {
        if (num==1||num==2) {
            return 1;
        }
        else {
            return FeiShi(num-1)+FeiShi(num-2);
        }
    }
    int FeiShi1(int num) {
        int ia=1;
        int ib=1;
        for(int i=3;i<=num;i++) {
            int ic=ia+ib;
            ia=ib;
            ib=ic;
        }
        return ib;
    }
    public static void main(String[] args) {
        FeiShi fs=new FeiShi();
        int num =fs.FeiShi(7);
        System.out.println("费式数列中的第"+7+"个值是："+num);
        System.out.println("--------------------------");
        System.out.println(fs.FeiShi1(7));
    }
}
