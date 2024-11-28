function maxSubarraySum_Optimized(arr){
    let N = arr.length;
    let maxSum = Number.MIN_VALUE;

    let sum = 0;
    for(let i=1;i<N;i++){
        sum += arr[i];

        if(sum > maxSum){
            maxSum = sum;
        }

        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}

// const arr = [-2,3,4,-1,5,-10,7];
const arr = [-3,4,6,8,-10,2,7];
console.log(maxSubarraySum_Optimized(arr));