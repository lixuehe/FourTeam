package day03;
//自定义ClassB类实现InterfaceA接口并重写method方法，要求计算n的阶乘并返回；
public class ClassB implements InterfaceA{

    @Override
    public int method(int n) {
      int res=1;
      for(int i=1;i<=n;i++){
          res*=i;
      }
      return res;
    }
}
