def subsetSum(arr,n,summ):
    dp=[['F' for i in range(summ+1)] for j in range(n+1)]
    for i in range(n+1):
        for j in range(summ+1):
            if j==0:
                dp[i][j]='T'

    for i in range(1,n+1):
        for j in range(1,summ+1):
            if arr[i-1]<=j:
                if dp[i-1][j-arr[i-1]] =='F' and dp[i-1][j]=='F':
                    dp[i][j]=='F'
                else:
                    dp[i][j]='T'
            else:
                dp[i][j]=dp[i-1][j]
    print(dp)
    return dp[n][summ]

def equalSum(arr,n):
    if sum(arr)%2!=0:
        return 'F'
    else:
        return subsetSum(arr,n,sum(arr)//2)
print(equalSum([1,5,11,5],4))
