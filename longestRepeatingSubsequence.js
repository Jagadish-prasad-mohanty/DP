const createDp = (n,m) =>{
    const dp=new Array(n+1);
    for (let i=0;i<n+1;i++){
        const temp=[]
        for (let j=0;j<m+1;j++){
            temp.push(-1)
        }
        dp[i]=temp
    }
    return dp

}
const initializeDp =(dp,n,m) =>{
    for (let i=0;i<n+1;i++){
        for (let j=0;j<m+1;j++){
            if (i===0 || j===0){
                dp[i][j]=0
            }
        }
    }
    return dp
}
const max= (a,b)=>{
    return a>b?a:b
}
const LCS= (A,B,n) =>{
    let iDp=createDp(n,n);
    iDp=initializeDp(iDp,n,n)

    for (let i=1;i<n+1;i++){
        for (let j=1;j<n+1;j++){
            if (A[i-1]===B[j-1] && i!==j){
                iDp[i][j]=1+iDp[i-1][j-1]
            }else{
                iDp[i][j]=max(iDp[i-1][j],iDp[i][j-1])
            }
        }
    }
    console.log(iDp);
    return iDp[n][n]
}
const LRS= (A,n)=>{
    return LCS(A,A,n)
}

A="asaedbcdc";
n=9;
console.log(LRS(A,n));

