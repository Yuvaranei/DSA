function smallestSubarraySum(arr){
    let N = arr.length;
    let min = N;

    let minEle = Math.min(...arr);
    let maxEle = Math.max(...arr);

    let lastMax = -1, lastMin = -1;

    for(let i=N-1;i>=0;i--){
        if(arr[i] == minEle){
            lastMin = i;
            if(lastMax != -1){
                min = Math.min(min, lastMax - lastMin + 1);
            }
        } else if(arr[i] == maxEle){
            lastMax = i;
            if(lastMin != -1){
                min = Math.min(min, lastMin - lastMax + 1);
            }
        }
    }
    return min;
}

const arr = [1];
console.log(smallestSubarraySum(arr))