package day03;

public abstract class AbstractTest {

    private int cnt;
    public AbstractTest() {
        super();
    }
    public AbstractTest(int cnt) {
        super();
        setCnt(cnt);
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public abstract void show();
    
}
