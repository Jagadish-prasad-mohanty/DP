const solve= (s,i,j,isTrue)=>{
    if (i>j){
        return false
    }
    if (i==j){
        if (isTrue){
            return s[i]==='T'
        }
        else{
            return s[i]==='F'
        }
    }
    var sum=0
    for (let k=i+1;k<=j-1;k+=2){
        const lt=solve(s,i,k-1,true)
        const rt=solve(s,k+1,j,true)
        const lf=solve(s,i,k-1,false)
        const rf=solve(s,k+1,j,false)

        if (s[k]==='&'){
            sum+=isTrue?lt*rt:lt*rf+lf*rt+lf*rf;

        }
        else if (s[k]==='|'){
            sum+=!isTrue?lt*rt:lt*rf+lf*rt+lf*rf;
        }
        else if (s[k]==='^'){
            sum+=isTrue?lt*rf+rt*lf:lt*rt+lf*rf;
        }

    }
    return sum
}

console.log(solve("F&T^T&T",0,6,true));
// console.log(sum);