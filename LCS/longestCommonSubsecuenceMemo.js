const max=(a,b)=>{
    return a>b?a:b
}
const A="abghmn";
const B="abhlmn";
const n=6
const m=6
const dp=new Array(n+1)
for (let i=0;i<n+1;i++){
    temp=[]
    for (let j=0;j<m+1;j++){
        temp.push(-1)
    }
    dp[i]=temp;
}
for (let i=0;i<n+1;i++){
    for (let j=0;j<m+1;j++){
        if (i===0 || j===0){
            dp[i][j]=0
        }
    }
}
const longSubcMemo = (A,B,n,m)=>{
    // initialization
    if (dp[n][m]!==-1){
        return dp[n][m]
    }
    if (A[n-1]===B[m-1]){
        dp[n][m]=1+longSubcMemo(A,B,n-1,m-1)
        return dp[n][m]
    }
    else{
        dp[n][m]=max(longSubcMemo(A,B,n-1,m),longSubcMemo(A,B,n,m-1))
        return dp[n][m]
    
    }
    
}


console.log(longSubcMemo(A,B,n,m));
console.log(dp);