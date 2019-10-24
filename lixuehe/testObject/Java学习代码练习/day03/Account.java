package day03;
/*
    自定义抽象类Account实现封装，特征：账户余额(balance)，在该类中提供一个
    计算利息并返回的抽象方法。
*/
public abstract class Account {
    private int balance;

    public Account() {
    }

    public Account(int balance) {
        this.balance = balance;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public abstract double getLiXi();

}
