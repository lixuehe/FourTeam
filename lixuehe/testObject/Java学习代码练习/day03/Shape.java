package day03;

public class Shape {

    private  int x;
    private  int y;

    public Shape() {
    }

    public Shape(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
    public void show() {
        System.out.print("横坐标："+x+"纵坐标："+y);
    }
}
