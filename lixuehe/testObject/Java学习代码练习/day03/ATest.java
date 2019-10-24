package day03;

public class ATest {

    public static void test(A a) {
        a.show();
    }

    public static void main(String[] args) {
//        ATest.test(new SubA());
        System.out.println("---------------");
        A a=new A() {
            @Override
            public void show() {
                System.out.println("匿名内部类的第二种方式");
            }
        };
        ATest.test(a);

    }
}
