package day03;

import java.net.Socket;

public class Singleton {
    private Singleton(){};
    private static Singleton sin=new Singleton();
    public static Singleton getInstance() {
        return sin;
    }

    public static void main(String[] args) {
        Singleton s1=Singleton.getInstance();
        Singleton s2=Singleton.getInstance();
        System.out.println(s1==s2);
    }
}
