def subsetSum(arr,n,summ):
    dp=[['F' for j in range(summ+1)] for i in range(n+1)]
    for i in range(n+1):
        for j in range(summ+1):
            if j==0:
                dp[i][j]='T'

    for i in range(1,n+1):
        for j in range(1,summ+1):
            # print(i,j)
            if arr[i-1]<=j:
                if dp[i-1][j-arr[i-1]] =='F' and dp[i-1][j]=='F':
                    dp[i][j]='F'
                else:
                    dp[i][j]='T'
            else:
                dp[i][j]=dp[i-1][j]
    print(dp)
    return dp[n][summ]

print(subsetSum([2,3,7,8,10],5,14))
    
            