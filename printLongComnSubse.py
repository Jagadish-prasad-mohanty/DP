def printLong(A,B,n,m):
    dp=[[-1 for i in range(m+1)] for j in range(n+1)]
    for i in range(n+1):
        for j in range(m+1):
            if i==0 or j==0:
                dp[i][j]=0

    for  i in range(1,n+1):
        for j in range(1,m+1):
            if A[i-1]==B[j-1]:
                dp[i][j]=dp[i-1][j-1]+1
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])
    res=""
    for j in range(1,m+1):
        if dp[n][j]!=0 and dp[n][j]>dp[n][j-1]:
            res+=B[j-1]
    return res
    # return dp

A="vzfcde"
B="oqzpdge"
n=6
m=7

print(printLong(A,B,n,m))