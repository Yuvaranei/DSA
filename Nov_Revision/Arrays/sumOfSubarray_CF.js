
function sumOfSubarrays(arr){
    const N = arr.length;
    let totalSum = 0;

    for(let s=0;s<N;s++){
        let sum = 0;
        for(let e=s;e<N;e++){
            sum += arr[e];
            totalSum += sum;
        }
    }
    return totalSum;
}

const arr = [1,2,3];
console.log(sumOfSubarrays(arr));