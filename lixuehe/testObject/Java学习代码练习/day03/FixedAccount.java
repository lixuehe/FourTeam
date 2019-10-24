package day03;

/*
    自定义FixedAccount类继承Account类并重写抽象方法，要求在main方法中使用多态
    方式构造对象并存入1000元，计算利息后打印出来(其中利率0.003)。
*/
public class FixedAccount extends Account {
    @Override
    public double getLiXi() {
        return getBalance()*0.003;
    }

    public static void main(String[] args) {
        Account acc=new FixedAccount();
        acc.setBalance(1000);
        double liXi=acc.getLiXi();
        System.out.println("得到的利息是："+liXi);


    }
}
