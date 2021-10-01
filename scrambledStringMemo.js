
const findScrambled= (a,b) =>{
    // base condn
    if (obj[`${a}${b}`]){
        return obj[`${a}${b}`]
    }
    if (a===b){
        obj[`${a}${b}`]=true
        return true
    }
    if (a.length<=1 || b.length<=1){
        obj[`${a}${b}`]=false
        return false
    }
    const n=a.length;
    // loop
    for (let i=1;i<=n-1;i++){
        console.log(a,b);
        if ((findScrambled(a.slice(0,i),b.slice(n-i,n)) && findScrambled(a.slice(i,n),b.slice(0,n-i))) ||
        (findScrambled(a.slice(0,i),b.slice(0,i)) && findScrambled(a.slice(i,n),b.slice(i,n)))){
            obj[`${a}${b}`]=true
            return true
        }
    }
    obj[`${a}${b}`]=false
    return false
}
const obj=new Object;
a='great';
b='rgtae';
if (a.length!==b.length){
    console.log('False');
}else if (findScrambled(a,b))
console.log('True');
else
console.log('False');

console.log(obj);