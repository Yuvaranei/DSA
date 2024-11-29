function maxWaterBtwAny2Walls(arr){
    let N = arr.length;

    let i=0, j=N-1;

    let maxWater = 0;

    while(i<j){
        let water = Math.min(arr[i], arr[j]) * (j-i);
        maxWater = Math.max(maxWater, water);

        if(arr[i] < arr[j]){
            i++;
        } else {
            j--;
        }
    }
    return maxWater;
 }

 const arr = [4,2,10,6,8,2,6,2];

console.log(maxWaterBtwAny2Walls(arr));