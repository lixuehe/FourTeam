public class JieCheng {
//    递推的方式实现阶乘的计算
    int show(int n) {
        int res=1;
        for (int i=n;i>0;i--){
            res*=i;
        }
        return res;
    }
//    递归的方式实现 阶乘的计算
   /* int show(int n) {
        if(n==1) {
            return 1;
        }
        return n*show(n-1);
    }*/
    public static void main(String[] args) {
        JieCheng a=new JieCheng();
        int res=a.show(6);
        System.out.println("阶乘是："+res);
    }
}
