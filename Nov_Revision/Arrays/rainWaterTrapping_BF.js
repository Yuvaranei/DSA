function rainWaterTrapping_BF(arr){
    let N = arr.length;

    let sum = 0;
    
    for(let i=0;i<N;i++){
        let leftMax = Number.MIN_VALUE;
        let rightMax = Number.MIN_VALUE;

        for(let j=i-1;j>=0;j--){
            leftMax = Math.max(leftMax, arr[j]);
        }

         for(let j=i+1;j<N;j++){
            rightMax = Math.max(rightMax, arr[j]);
        }

        let waterTrapped = Math.min(leftMax, rightMax) - arr[i];

        if(waterTrapped > 0){
            sum += waterTrapped;
        }
    }
    return sum;
}

const arr = [2,1,3,2,1,2,4,3,2,1,3,1];
console.log(rainWaterTrapping_BF(arr));