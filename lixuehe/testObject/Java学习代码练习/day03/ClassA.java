package day03;

//自定义ClassA类实现InterfaceA接口并重写method方法，要求计算1到n的和并返回
public class ClassA implements InterfaceA{

    @Override
    public int method(int n) {
        int sum=0;
        for(int i=0;i<=n;i++){
            sum+=i;
        }
        return sum;
    }
}
