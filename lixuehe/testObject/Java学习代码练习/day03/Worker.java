package day03;

public class Worker extends People {

    private int money;

    public Worker() {
    }
    public Worker(String name, int age, int money) {
        super(name, age);
        this.money = money;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }
    public void work() {
        System.out.println("正在工作。。");
    }

    @Override
    public void show() {
        super.show();
        System.out.println("薪水："+getMoney());
    }

    public static void main(String[] args) {
        Worker w1=new Worker();
        w1.show();
        Worker w2=new Worker("张飞",18,2000);
        w2.show();
    }
}
