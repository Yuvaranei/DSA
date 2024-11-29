function findAllPairsInDistinctArrayWithSumK(arr, k){
    let N = arr.length;
    
    let i = 0, j = N-1;

    let count = 0;

    let pairs = [];

    while(i<j){
        let sum = arr[i] + arr[j];
        if( sum == k){
            pairs.push([arr[i],arr[j]]);
            count++;
            i++;
            j--;
        } else if (sum < k){
            i++;
        } else {
            j--;
        }
    }

    console.log("All pairs..", pairs);
    return count;
 }

 const arr = [1,2,3,4,5,6,7,8];

console.log(findAllPairsInDistinctArrayWithSumK(arr, 10));