function checkIthBitSetOrNot(N, i){
    if((N & (1<<i)) != 0){
        return true;
    }
    return false;
 }

console.log(checkIthBitSetOrNot(10, 0));