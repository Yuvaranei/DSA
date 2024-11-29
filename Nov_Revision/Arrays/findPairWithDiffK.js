function findPairWithDiffK(arr, k){
    let N = arr.length;
    
    let i = 0, j = 1;
    let count = 0;

    let pairs = [];

    while(j<N){
        let diff = arr[j] - arr[i];
        if(diff == k){
            pairs.push([arr[i], arr[j]]);
            count++;
            i++;
            j++;
        } else if(diff < k){
            j++;
        } else {
            i++;
        }
    }

    console.log("Pairs = ", pairs);

    return count;
 }

 const arr = [-5,-2,1,8,10,12,15];

console.log(findPairWithDiffK(arr, 11));