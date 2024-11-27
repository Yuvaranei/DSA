function SpecialIndex(arr){
    let N = arr.length;
    let count = 0;
    for(let i=0;i<N;i++){
        let oddSum = 0;
        let evenSum = 0;
        for(let j=0;j<N;j++){
            if(j%2 == 0){
                if(j!=i){
                    if(j<i){
                        evenSum += arr[j];
                    } else {
                        oddSum += arr[j];
                    }
                }
            } else {
                if(j!=i){
                    if(j<i){
                        oddSum += arr[j];
                    } else {
                        evenSum += arr[j];
                    }
                }
            }
        }
        if(evenSum == oddSum){
            count++;
        }
    }
    return count;
}

const arr = [1,2,3,4,5];
// const arr = [4,3,2,7,6,-2];
console.log(SpecialIndex(arr))