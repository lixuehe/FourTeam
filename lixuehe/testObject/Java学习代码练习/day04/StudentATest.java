package day04;

public class StudentATest {

    public static void main(String[] args) {
        StudentA s1 =new StudentA(12,"张得,");
        s1.show();
        System.out.println("---------------------------");
        StudentA s2 =new StudentA(13,"张得,");
        s2.show();
        boolean b1=s1.equals(s2);
        System.out.println("b1="+b1);
        System.out.println(s1==s2);
        System.out.println("-----------------------------");
        int ia=s1.hashCode();
        int ib=s2.hashCode();
        System.out.println("s1 的哈希马值："+ia);
        System.out.println("s2 的哈希马值："+ib);
        System.out.println(s2);
    }
}
