function rainWaterTrapping_Optimized(arr){
    let N = arr.length;

    let sum = 0;

    let leftMax = [];
    let rightMax = [];

    leftMax[0] = 0;
    for(let i=1;i<N;i++){
        leftMax[i] = Math.max(leftMax[i-1], arr[i-1]);
    }

    rightMax[N-1] = 0;
    for(let i=N-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1], arr[i+1]);
    }

    // console.log("leftMax..", leftMax);
    // console.log("rightMax..", rightMax);
    
    for(let i=0;i<N;i++){
        let waterTrapped = Math.min(leftMax[i], rightMax[i]) - arr[i];

        if(waterTrapped > 0){
            sum += waterTrapped;
        }
    }
    return sum;
}

const arr = [2,1,3,2,1,2,4,3,2,1,3,1];
console.log(rainWaterTrapping_Optimized(arr));