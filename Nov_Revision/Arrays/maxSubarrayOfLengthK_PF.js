
function printSubarray_LengthK(arr, k){
    const N = arr.length;
    let maxSum = Number.MIN_VALUE;

    const pf = [];
    pf[0] = arr[0];

    for(let i=1;i<N;i++){
        pf[i] = arr[i] + pf[i-1];
    }

    for(let i=0;i<N-k+1;i++){
        let sum = 0;
        if(i==0){
            sum = pf[k-1];
        } else {
            sum = pf[i+k-1] - pf[i-1];
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}

const arr = [-3,4,-2,5,3,-2,8,2,-1,4];
console.log(printSubarray_LengthK(arr, 5));