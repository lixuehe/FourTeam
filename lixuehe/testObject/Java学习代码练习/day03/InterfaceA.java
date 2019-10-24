package day03;
/*
        自定义InterfaceA接口，里面含有一个抽象方法int method(int n)；
        自定义ClassA类实现InterfaceA接口并重写method方法，要求计算1到n的和并返回
        自定义ClassB类实现InterfaceA接口并重写method方法，要求计算n的阶乘并返回；
        自定义InterfaceTest测试类，里面包含一个参数为InterfaceA接口形参的方法，
        并在该方法体中调用method方法，最后在main方法中调用该方法。
*/
public interface InterfaceA {
    public abstract int method(int n);
}
