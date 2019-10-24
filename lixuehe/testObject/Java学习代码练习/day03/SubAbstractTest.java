package day03;

public class SubAbstractTest extends AbstractTest{

    @Override
    public void show() {
        System.out.println("我是被迫重写的方法");
    }

    public static void main(String[] args) {
        AbstractTest at=new SubAbstractTest();
        at.show();
    }
}
