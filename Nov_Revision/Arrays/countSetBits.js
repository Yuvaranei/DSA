function checkIthBitSetOrNot(N, i){
    if((N & (1<<i)) != 0){
        return true;
    }
    return false;
 }


 function countSetBits(N){
    let count = 0;
    for(let i=0;i<32;i++){
        if(checkIthBitSetOrNot(N,i)){
            count++;
        }
    }
    return count;
 }

console.log(countSetBits(7));