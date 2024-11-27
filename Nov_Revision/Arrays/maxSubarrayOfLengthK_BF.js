
function printSubarray_LengthK(arr, k){
    const N = arr.length;
    let maxSum = Number.MIN_VALUE;

    for(let s=0;s<=N-k;s++){
        let sum = 0;
        for(let e=s;e<s+k;e++){
            sum += arr[e];
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}

const arr = [-3,4,-2,5,3,-2,8,2,-1,4];
console.log(printSubarray_LengthK(arr, 5));