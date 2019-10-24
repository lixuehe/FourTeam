package day03;

public class ShapeTest {

    public static void printShape(Shape s) {
        s.show();
    }
    public static void main(String[] args) {
        Shape s1=new React(1,2,3,4);
        Shape s2=new Circle(1,2,3);
        ShapeTest.printShape(s1);
        ShapeTest.printShape(s2);
    }
}
