#include<stdio.h>

int main(){
    int a;
    scanf("%d",&a); 
    int result = a&1;
    if(result==0){
        printf("偶数/n");
    }else{
        printf("奇数/n");
    }
}
