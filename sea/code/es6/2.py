# 函数推导式 编写 九九乘法表
num = ["%s * %s = %s " % (j , i , j * i)  for i in range(1,10)  for j in range(1,i+1) ]
j = 0
for i in range(0,9):
    # j 0-44
    for c in range(0, i + 1):
        print(num[j], end = '')
        j = j + 10
    print()