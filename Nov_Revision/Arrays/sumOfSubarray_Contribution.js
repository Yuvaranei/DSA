
function sumOfSubarrays(arr){
    const N = arr.length;
    let totalSum = 0;

    for(let i=0;i<N;i++){
        totalSum += arr[i] * (i+1) * (N-i);
    }
    return totalSum;
}

const arr = [1,2,3];
console.log(sumOfSubarrays(arr));