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
    return iDp
}
const  printSCS= (A,B,n,m) =>{
    i=n;
    j=m;
    res=""
    const dp=LCS(A,B,n,m)
    while (i>0 && j>0){
        if (A[i-1]===B[j-1]){
            res+=A[i-1]
            i--;
            j--;
        }else{
            if (dp[i-1][j]>=dp[i][j-1]){
                res+=A[--i]
            }else{
                res+=B[--j]
            }
        }
        // console.log(res);
    }
    if (i!==0){
        res+=A[0]
    }
    if ( j!==0){
        res+=B[0]
    }
    return res.split('').reverse().join('')
    
}

A="abcdfa";
B="dbcfk";
n=6;
m=5;
console.log(printSCS(A,B,n,m));
// adbcdfak
// i=4
// j=3
// res=akfdcda