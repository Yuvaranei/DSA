function fastPower(num, N){
    if(N == 1)
        return num;
    
    let power = fastPower(num, Math.floor(N/2));
    if(N%2 == 0){
        return  power * power
    } else {
        return power * power * num
    }
 }

console.log(fastPower(2,6));