const createDp = (n) =>{
    const dp=new Array(n+1);
    for (let i=0;i<n+1;i++){
        const temp=[]
        for (let j=0;j<n+1;j++){
            temp.push(-1)
        }
        dp[i]=temp
    }
    return dp

}

const isPalindrome= (s,a,b) =>{
    // console.log(s,a,b);
    i=a;
    j=b;
    if (i==j){
        return true
    }
    if (j-i==1){
        if (s[i]===s[j]){
            return true
        }
        else{
            return false
        }
    }
    while (i<j){
        if (s[i]===s[j]){
            i++;
            j--;
        }
        else{
            return false
        }
    }
// console.log(s.slice(i,j-i+1));
    return true
}

const partition = (s,i,j) =>{
    // console.log(s,i,j);
    if (dp[i][j]!==-1){
        // console.log('hi');
        return dp[i][j]
    }
    if (i>=j || isPalindrome(s,i,j) ){
        // console.log(i,j);
        return 0
    }
    var minm=Number.MAX_SAFE_INTEGER
    for (var k=i;k<=j-1;k++){
        const temp=1+partition(s,i,k)+partition(s,k+1,j)
        if (temp<minm){
            minm=temp
            // console.log(minm);
        }
    }
    dp[i][j]=minm
    return minm
}

const palindromicPartition= (s,n) =>{
    return partition(s,0,n-1)
}
const s='anitinvv'
const n=8
const dp=createDp(n+1);


console.log(palindromicPartition(s,n));
// console.log(isPalindrome('anitinb',0,5)?'yes':'no');