package day03;
/*  自定义矩形(Rect)类，特征有：横纵坐标、长度及宽度，要求实现封装并提供打印方法；
    自定义圆形(Circle)类，特征有：横纵坐标、半径，要求实现封装并提供打印方法；
    提取共性自定义图形(Shape)类。
    自定义ShapeTest类，自定义成员方法实现既能打印矩形又能打印圆形的方法并调用
    (最后一个成员方法选做)
*/
public class React extends Shape{
    private int lenght;
    private int width;

    public React() {
        super();
    }

    public React(int x, int y, int lenght, int width) {
        super(x, y);
        this.lenght = lenght;
        this.width = width;
    }

    public int getLenght() {
        return lenght;
    }

    public void setLenght(int lenght) {
        this.lenght = lenght;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    @Override
    public void show() {
        super.show();
        System.out.println("长度："+lenght+"宽度："+width);
    }
}
