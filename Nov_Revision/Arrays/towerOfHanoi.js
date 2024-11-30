function towerOfHanoi(N, src, temp, dest){
    if(N==0)
        return;
    towerOfHanoi(N-1, src, dest, temp);
    console.log(N,src," -> ", dest);
    towerOfHanoi(N-1, temp, src, dest);
 }

console.log(towerOfHanoi(3, 'A', 'B', 'C'));