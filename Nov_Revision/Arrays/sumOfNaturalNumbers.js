function sumOfNaturalNumbers(N){
    if(N == 1)
        return 1;
    return sumOfNaturalNumbers(N-1) + N;
 }

console.log(sumOfNaturalNumbers(10));