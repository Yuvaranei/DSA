function maxSubarraySumPF(arr){
    let N = arr.length;
    let maxSum = Number.MIN_VALUE;

    let pf = [];
    pf[0] = arr[0];

    for(let i=1;i<N;i++){
        pf[i] = pf[i-1] + arr[i];
    }

    for(let s=0;s<N;s++){
        for(let e=s;e<N;e++){
            let sum = 0;
            if(s ==0 ){
                sum = pf[e];
            } else {
                sum = pf[e] - pf[s-1];
            }
           
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

const arr = [-2,3,4,-1,5,-10,7];
// const arr = [-3,4,6,8,-10,2,7];
console.log(maxSubarraySumPF(arr));