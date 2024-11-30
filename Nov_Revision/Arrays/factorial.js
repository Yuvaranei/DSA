function factorial(N){
    if(N == 1)
        return 1;
    return factorial(N-1) * N;
 }

console.log(factorial(5));