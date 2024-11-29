function makeBinaryNumOfCsBs(b, c){
    let ans = 0;
    for(let i=c; i<=b+c-1;i++){
        ans = ans | (1<<i);
    }
    return ans;
 }

console.log(makeBinaryNumOfCsBs(2,3));