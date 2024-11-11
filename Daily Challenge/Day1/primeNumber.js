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

function isPrime(num){
    console.log(countFactors(num))
    return (countFactors(num) > 2) ? 'No' : 'Yes'
}

const result = isPrime(4);
console.log(result);