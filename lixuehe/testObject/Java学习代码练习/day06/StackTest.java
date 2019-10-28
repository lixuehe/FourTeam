package day06;

import java.util.Stack;

//查询java.util.Stack类，实现将11 22 33 44 55依次入栈再出栈。
public class StackTest {
    public static void main(String[] args) {
        Stack s=new Stack();
        for(int i=1;i<=5;i++) {
            s.push(i*11);
            System.out.println("栈中元素有："+s);
        }
        System.out.println("栈顶元素是："+s.peek());
        for(int i=1;i<=5;i++) {
            s.pop();
            System.out.println("栈中元素有："+s);
        }
    }
}
