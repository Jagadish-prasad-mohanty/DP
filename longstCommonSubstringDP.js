const max=(a,b)=>{
    return a>=b?a:b
}
const lcs= (A,B,n,m) =>{
    const dp=new Array(n+1)
    for (let i=0;i<n+1;i++){
        const temp=[]
        for (let j=0;j<m+1;j++){
            temp.push(-1)
        }
        dp[i]=temp
    }
    for (let i=0;i<n+1;i++){
        for (let j=0;j<m+1;j++){
            if (i==0 || j==0){
                dp[i][j]=0
            }
        }
    }
    let flag=0
    for (let i=1;i<n+1;i++){
        for (let j=1;j<m+1;j++){
                if (A[i-1]===B[j-1]){
                    dp[i][j]=1+dp[i-1][j-1]
                }else{
                    dp[i][j]=0
                }

            
        }
    }
    str=''
    maxm=0
    console.log(dp);
    for (let j=1;j<m+1;j++){
        if (dp[n][j]>maxm){
            maxm=max(maxm,dp[n][j])
            str=B.slice(j-maxm,j)
        }
    }

    return str


}

console.log(lcs('abcdfcee','abfcef',8,6));