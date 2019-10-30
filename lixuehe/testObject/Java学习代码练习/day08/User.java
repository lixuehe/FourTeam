package day08;

import java.util.Objects;

/*
    使用基于tcp协议的编程模型实现将UserMessage类型对象由客户端发送给服务器；
    服务器接收到对象后判断用户对象信息是否为"admin"和"123456"，若是则将
    UserMessage对象中的类型改为"success"，否则将类型改为"fail"并回发给客户端
    客户端接收到服务器发来的对象后判断并给出提示。
    其中UserMessage类的特征有：类型(字符串类型) 和 用户对象(User类型)。
    其中User类的特征有：用户名、密码(字符串类型)。
    如：UserMessage tm = new UserMessage("check", new User("admin", "123456"));
*/

//其中User类的特征有：用户名、密码(字符串类型)。
public class User implements java.io.Serializable{
    private String userName;
    private String password;

    public User() {
    }

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
