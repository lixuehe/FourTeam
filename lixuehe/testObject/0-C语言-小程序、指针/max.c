#include <stdio.h>

int main(){

    int a;
    int b;
    int c;
    int d;
    scanf("%d,%d,%d",&a,&b,&c);
    if(a<b){
        d=a;
	a=b;
	b=d;
    }
    if(a<c){
        d=a;
	a=c;
	c=d;
    }
    if(b<c){
        d=b;
        b=c;
	c=d;
    }
    printf("从大到小依次：%d,%d,%d",a,b,c);
    return 0;
}
