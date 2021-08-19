const coinChange= (arr,n,s) =>{
    const dp=[];
    for (let i=0;i<n+1;i++){
        const temp=[]
        for(let j=0;j<s+1;j++){
            if (j===0){
                temp.push(1)
            }
            else{
                temp.push(0)
            }
        }
        dp.push(temp)
    }
    for (let i=1;i<n+1;i++){
        for (let j=1;j<s+1;j++){
            if (arr[i-1]<=j){
                dp[i][j]=dp[i][j-arr[i-1]]+dp[i-1][j]

            }
            else{
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    return dp[n][s]

}

console.log(coinChange([1,2,3],3,5));