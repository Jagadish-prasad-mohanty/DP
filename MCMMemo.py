import sys;
def MCM(arr,i,j):
    
    minm=sys.maxsize
    if dp[i][j]!=-1:
        return dp[i][j]
    if (i>=j):
        return 0
    
    for k in range(i,j):
        temp_ans=MCM(arr,i,k)+MCM(arr,k+1,j)+arr[i-1]*arr[k]*arr[j]
        # print(i,j,k,temp_ans)
        if temp_ans<minm:
            minm=temp_ans
    dp[i][j]=minm
    return minm

dp=[[-1 for i in range(5+1)] for j in range(6)]
print(MCM([40,20,30,10,30],1,4))
print(dp)