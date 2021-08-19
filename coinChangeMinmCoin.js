const minmCoin= (arr,n,s) =>{
    let maxm=Number.MAX_VALUE;
    const dp=new Array(n+1);
    for (let i=0;i<n+1;i++){
        const temp=[]
        for (let j=0;j<s+1;j++){
            if (j===0){
                temp.push(0)
            }
            else{
                temp.push(maxm)
            }
        }
        dp[i]=temp
    }
    
    for (let j=1;j<s+1;j++){
        if (j%arr[0]===0){
            dp[1][j]=j/arr[0]
        }
    }
    for (let i=2;i<n+1;i++){
        for (let j=1;j<s+1;j++){
            if (arr[i-1]<=j){
                dp[i][j]=dp[i][j-arr[i-1]]+1<=dp[i-1][j]?dp[i][j-arr[i-1]]+1:dp[i-1][j]
            }
            else{
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    return dp[n][s]
}

console.log(minmCoin([1,2,3],3,5));