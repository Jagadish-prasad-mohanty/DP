def subsetSum(arr,n,summ):
    dp=[['F' for j in range(summ+1)] for i in range(n+1)]
    for i in range(n+1):
        for j in range(summ+1):
            if j==0:
                dp[i][j]='T'

    for i in range(1,n+1):
        for j in range(1,summ+1):
            if arr[i-1]<=j:
                if dp[i-1][j-arr[i-1]]=='F' and dp[i-1][j]=='F':
                    dp[i][j]='F'
                else:
                    dp[i][j]='T'

            else:
                dp[i][j]=dp[i-1][j]


    return dp[n]

def minmSubset(arr,n):
    minm=sum(arr)
    maxm=sum(arr)
    checkArr=subsetSum(arr,n,maxm)

    print(checkArr)
    rg=maxm//2
    for i in range(rg+1):
        if checkArr[i]=='T':
            minm=min(minm,maxm-2*i)
    return minm

print(minmSubset([1,2,7],3))
