function countFactors(num){
    let count = 0;
    for(let i=1;i<=Math.sqrt(num); i++){
        if( num%i == 0){
            if(i == num/i){
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function primeNumbers(num){
    let prime = [];
    for(let i=1;i<=num;i++){
        if (countFactors(i) == 2)
            prime.push(i)
    }
    return prime;
}

const result = primeNumbers(20);
console.log(result);