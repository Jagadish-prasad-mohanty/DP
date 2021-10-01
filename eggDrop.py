import sys
def solve (e,f):
    if e==1:
        return f
    if f<=1:
        return f

    minm=sys.maxsize
    
    for k in range(1,f+1):
        temp=1+max(solve(e-1,k-1),solve(e,f-k))

        minm=min(minm,temp)

    return minm

print(solve(2,10))