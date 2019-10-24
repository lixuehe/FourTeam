package day03;

public class Circle extends Shape{
    private int r;

    public Circle() {
        super();
    }

    public Circle(int x, int y, int r) {
        super(x, y);
        this.r = r;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    @Override
    public void show() {
        super.show();
        System.out.println("半径："+r);
    }
}

