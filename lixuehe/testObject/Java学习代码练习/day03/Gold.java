package day03;

public class Gold implements Metal,Money{

    @Override
    public void Shine() {
        System.out.println("买了好多好吃的");
    }

    @Override
    public void buy() {
        System.out.println("发出了金色的光芒");
    }

    public static void main(String[] args) {
        Metal mt=new Gold();
        mt.Shine();
        Money my=new Gold();
        my.buy();
    }
}
