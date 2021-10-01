import sys;
def MCM(arr,i,j):
    minm=sys.maxsize
    if (i>=j):
        return 0
    
    for k in range(i,j):
        temp_ans=MCM(arr,i,k)+MCM(arr,k+1,j)+arr[i-1]*arr[k]*arr[j]
        print(i,j,k,temp_ans)
        if temp_ans<minm:
            minm=temp_ans

    return minm

print(MCM([40,20,30,10,30],1,4))