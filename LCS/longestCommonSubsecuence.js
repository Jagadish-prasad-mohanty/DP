const max=(a,b)=>{
    return a>b?a:b
}
const longestSubsecuence= (A,B,n,m)=>{
    // console.log(A,B,n,m)
    if (n===0 || m===0){
        return 0
    }
    if (A[n-1]===B[m-1]){
        return 1+longestSubsecuence(A,B,n-1,m-1)
    }
    else{
        return max(longestSubsecuence(A,B,n-1,m),longestSubsecuence(A,B,n,m-1))
    }

}

A="abghkm";
B="abhlmn";
n=m=6
console.log(longestSubsecuence(A,B,n,m))