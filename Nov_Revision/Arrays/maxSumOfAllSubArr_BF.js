function maxSubarraySumBF(arr){
    let N = arr.length;
    let maxSum = Number.MIN_VALUE;

    for(let s=0;s<N;s++){
        for(let e=s;e<N;e++){
            let sum = 0;
            for(let i=s;i<=e;i++){
                sum += arr[i];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

// const arr = [-2,3,4,-1,5,-10,7];
const arr = [-3,4,6,8,-10,2,7];
console.log(maxSubarraySumBF(arr));