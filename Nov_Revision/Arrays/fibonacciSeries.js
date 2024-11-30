function fibonacciSeries(N){
    if(N <=1 )
        return N;
    return fibonacciSeries(N-1) + fibonacciSeries(N-2);
 }

console.log(fibonacciSeries(7));