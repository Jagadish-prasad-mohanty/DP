const solve= (input,op) =>{
    if (input===""){
        console.log(op);
        return ;
    }
    solve(input.slice(1),op)
    solve(input.slice(1),op+input.slice(0,1))
}

op=""
input="abc"
solve(input,op)
