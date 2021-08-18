def subsetSum(arr,n,summ):
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
                dp[i][j]=dp[i-1][j-arr[i-1]]+dp[i-1][j]

            else:
                dp[i][j]=dp[i-1][j]
    print(dp)
    return dp[n][summ]

def count(arr,n,diff):
    summ=(sum(arr)+diff)
    if summ%2!=0:
        return -1

    else:
        summ//=2
    
    ans=subsetSum(arr,n,summ)
    return ans

print(count([2,4,4],3,2))

