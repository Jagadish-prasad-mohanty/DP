dp=[[-1 for i in range(8)] for i in range(5)]
def knap(wt,val,n,w):
    if n==0 or w==0:
        return 0

    if dp[n][w]!=-1:
        return dp[n][w]
    # print(dp)

    if wt[n-1]<=w:
        dp[n][w]=max(val[n-1]+knap(wt,val,n-1,w-wt[n-1]),knap(wt,val,n-1,w))
        return dp[n][w]
    else:
        dp[n][w]=knap(wt,val,n-1,w)
        return dp[n][w]
    
    



print(knap([1,3,4,5],[1,4,5,7],4,7))