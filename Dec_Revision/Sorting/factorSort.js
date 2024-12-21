function countFactor(a){
    let count = 0;
    for(let i=1;i*i<=a;i++){
        if(a%i == 0){
            if(a/i != i){
                count += 2;
            } else {
                count++;
            }
        }
    }
    return count;
}

function factorSort(arr){
    arr.sort((a,b) => {
        let factorOfA = countFactor(a);
        let factorOfB = countFactor(b);
        if(factorOfA == factorOfB){
            return a-b;
        } else return factorOfA - factorOfB;
    })
    return arr;
}


const arr = [4,2,8,6,10,9];
console.log(factorSort(arr));