def cuttingRod(cut,price,n,rod):
    dp=[[-1 for j in range(rod+1)] for i in range(n+1)]
    for i in range(n+1):
        for j in range(rod+1):
            if i==0 or j==0:
                dp[i][j]=0
    for i in range(1,n+1):
        for j in range(1,rod+1):
            if cut[i-1]<=j:
                dp[i][j]=max(price[i-1]+dp[i][j-cut[i-1]],dp[i-1][j])
            else:
                dp[i][j]=dp[i-1][j]

    return dp[n][rod]

print(cuttingRod([1,3,4,5],[1,6,5,7],4,7))

