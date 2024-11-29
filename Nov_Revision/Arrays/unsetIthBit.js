function unsetIthBit(N, i){
    return (N ^ (1<<i));
 }

console.log(unsetIthBit(7, 1));