def count(arr,n,summ):
    dp=[[-1 for j in range(summ+1)] for i in range(n+1)]
    for i in range(n+1):
        for j in range(summ+1):
            if i==0:
                dp[i][j]=0
            if j==0:
                dp[i][j]=1
    for i in range(1,n+1):
        for j in range(1,summ+1):
            if arr[i-1]<=j:
                dp[i][j]=dp[i-1][j]+dp[i-1][j-arr[i-1]]
            else:
                dp[i][j]=dp[i-1][j]


    return dp[n][summ]

print(count([2,3,5,6,8,10],6,10))
