function printDecimalToBinary(N){
    if(N<=1)
        return N;
    return printDecimalToBinary(Math.floor(N/2)) * 10 + N%2;
 }

console.log(printDecimalToBinary(0));