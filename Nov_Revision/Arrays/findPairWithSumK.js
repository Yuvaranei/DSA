function findPairWithSumK(arr, k){
    let N = arr.length;
    
    let i = 0, j = N-1;

    while(i<j){
        let sum = arr[i] + arr[j];
        if( sum == k){
            return [i,j];
        } else if (sum < k){
            i++;
        } else {
            j--;
        }
    }
 }

 const arr = [-5,-2,1,8,10,12,15];

console.log(findPairWithSumK(arr, 11));