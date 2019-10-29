package day07;

import java.util.HashMap;

/*
   准备一个HashMap集合，统计字符串"123,456,789,123,456"中每个数字字符串出现的次数并打印出来。
        如：
        123 出现了 2次    456 出现了 2次    789 出现了 1次
*/
public class HashMapTest {
    public static void main(String[] args) {
        HashMap<String,Integer> hm=new HashMap<String,Integer>();
        String str="123,456,789,123,456";
        String[] strs=str.split(",");
        for(int i=0;i<strs.length;i++) {
            if(hm.containsKey(strs[i])) {
                hm.put(strs[i],hm.get(strs[i])+1);
            }
            else {
                hm.put(strs[i], 1);
            }
        }
        System.out.println(hm);
    }
}
