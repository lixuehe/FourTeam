package day03;
/*  自定义Phone类，特征有：品牌和价格，
    行为有：打印品牌和价格的方法、设置品牌为参数指定的数值、设置价格为参数指定的数值、获取品牌的数值并返回、获取价格的数值并返回
    要求在main()方法声明Phone类型的引用指向Phone类型的对象，使用引用调用上述方法进行测试。
*/
public class Phone {
    private String brand;
    private int price;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public static void main(String[] args) {

        Phone p=new Phone();
        System.out.println("手记是"+p.getBrand()+"品牌，"+p.price+"钱买的");
        p.setBrand("Oppo");
        p.setPrice(2222);
        System.out.println("手记是"+p.brand+"品牌，"+p.price+"钱买的");
        System.out.println("手记是"+p.getBrand()+"品牌，"+p.price+"钱买的");
    }
}
