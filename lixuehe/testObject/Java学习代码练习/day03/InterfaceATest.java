package day03;

//自定义InterfaceTest测试类，里面包含一个参数为InterfaceA接口形参的方法，
//并在该方法体中调用method方法，最后在main方法中调用该方法。
public class InterfaceATest {
    public void Show(InterfaceA a) {
        int num=a.method(10);
        System.out.println("结果是:"+num);
    }

    public static void main(String[] args) {
        InterfaceATest ift=new InterfaceATest();
        ift.Show(new ClassA());
        ift.Show(new ClassB());
    }
}
