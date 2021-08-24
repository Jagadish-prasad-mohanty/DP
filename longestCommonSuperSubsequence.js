const max=(a,b)=>{
    return a>b?a:b
}
const longSubcMemo = (A,B,n,m)=>{
    dp=new Array(n+1)
    for (let i=0;i<n+1;i++){
        temp=[]
        for (let j=0;j<m+1;j++){
            temp.push(-1)
        }
        dp[i]=temp;
    }
    // initialization
    for (let i=0;i<n+1;i++){
        for (let j=0;j<m+1;j++){
            if (i===0 || j===0){
                dp[i][j]=0
            }
        }
    }
    for (let i=1;i<n+1;i++){
        for (let j=1;j<m+1;j++){
            if (A[i-1] === B[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }
            else{
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    console.log(dp);
    return m+n-dp[n][m]
    
}

A="abghkm";
B="abhlmn";
n=m=6
console.log(longSubcMemo(A,B,n,m));