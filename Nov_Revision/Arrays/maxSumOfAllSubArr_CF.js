function maxSubarraySumCF(arr){
    let N = arr.length;
    let maxSum = Number.MIN_VALUE;

    for(let s=0;s<N;s++){
        let sum = 0
        for(let e=s;e<N;e++){
            sum += arr[e];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

// const arr = [-2,3,4,-1,5,-10,7];
const arr = [-3,4,6,8,-10,2,7];
console.log(maxSubarraySumCF(arr));