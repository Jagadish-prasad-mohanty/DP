const createDp= (e,n) =>{
    const dp=new Array(e);
    for (let i=0;i<=e;i++){
        const temp=[]
        for (let j=0;j<=n;j++){
            temp.push(-1);
        }
        dp[i]=temp
    }
    return dp
}
const min= (a,b) =>{
    return a<=b?a:b
}
const max= (a,b) =>{
    return a>=b?a:b
}
const solve= (e,f)=>{
    if (dp[e][f]!==-1){
        return dp[e][f]
    }
    if (e==1)
        return f
    if (f<=1)
        return f

    minm=Number.MAX_VALUE
    
    for (let k=1;k<=f;k++){
        temp=1+max(solve(e-1,k-1),solve(e,f-k))

        minm=min(minm,temp)
    }

    return dp[e][f]=minm;
}

const n=8;
const e=3;
var dp=createDp(e,n);
// console.log(dp);
console.log(solve(e,n))