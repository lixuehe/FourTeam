#include<stdio.h>

int main()
{
    int a;
    int b;
    int *pa=&a;
    int *pb=&b;
    scanf("%d",&a);
    scanf("%d",&b);
   
    if(a>b){
        printf("%d\n\n",a);
    }else{
	printf("%d\n\n",b);
    }
    printf("%d\n",a);
    printf("%d\n",b);
    printf("%d\n",*pa);
    printf("%d\n",*pb);
}
