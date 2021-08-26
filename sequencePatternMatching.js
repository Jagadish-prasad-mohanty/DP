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
const LCS= (A,B,n,m) =>{
    let iDp=createDp(n,m);
    iDp=initializeDp(iDp,n,m)

    for (let i=1;i<n+1;i++){
        for (let j=1;j<m+1;j++){
            if (A[i-1]===B[j-1]){
                iDp[i][j]=1+iDp[i-1][j-1]
            }else{
                iDp[i][j]=max(iDp[i-1][j],iDp[i][j-1])
            }
        }
    }
    // console.log(dp);;
    return iDp[n][m]
}

const SPM=(A,B,n,m)=>{
    return (A.length<=B.length?A.length:B.length) === LCS(A,B,n,m)
}

A='axyz';
B='abcxny'
n=4;
m=6;
if (SPM(A,B,n,m)){
    console.log("TRUE");
}else{
    console.log('False');
}