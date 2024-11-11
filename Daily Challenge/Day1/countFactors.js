function countFactors(num){
    let count = 0;
    for(let i =1;i*i<=num;i++){
        if(num%i == 0){
            if(i == num/i){
                count++;
            } else {
                count = count + 2;
            }
        }
    }
    return count;
}

const result = countFactors(4);

console.log(result);

//1,100, 2, 50, 4, 25, 5, 20, 10