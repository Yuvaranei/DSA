function printValidParanthesis(str,N, opening, closing){
    if(str.length == 2*N){
        console.log(str);
        return;
    }
    if(opening < N){
        printValidParanthesis(str+"(",N, opening+1, closing)
    }
    if(closing < opening){
        printValidParanthesis(str+")",N, opening, closing+1)
    }
 }

console.log(printValidParanthesis("",2,0,0));