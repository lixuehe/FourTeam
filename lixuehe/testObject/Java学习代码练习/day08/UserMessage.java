package day08;
//其中UserMessage类的特征有：类型(字符串类型) 和 用户对象(User类型)。
public class UserMessage implements java.io.Serializable{
    private String type;
    private User user;

    public UserMessage() {
    }

    public UserMessage(String type, User user) {
        this.type = type;
        this.user = user;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserMessage{" +
                "type='" + type + '\'' +
                ", user=" + user +
                '}';
    }
}
