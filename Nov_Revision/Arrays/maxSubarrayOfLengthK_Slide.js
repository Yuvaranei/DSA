
function printSubarray_LengthK(arr, k){
    const N = arr.length;
    let maxSum = Number.MIN_VALUE;
    let sum = 0;

    let s = 0;
    let e = k-1

    for(let i=s;i<=e;i++){
        sum += arr[i];
    }
    maxSum = Math.max(sum, maxSum);

    s++; e++;
    while(e<N){

    }


    // for(let i=1;i<N-k+1;i++){
    //     sum = sum - arr[i-1] + arr[i+k-1]
    //     maxSum = Math.max(sum, maxSum);
    // }
    return maxSum;
}

const arr = [-3,4,-2,5,3,-2,8,2,-1,4];
console.log(printSubarray_LengthK(arr, 5));