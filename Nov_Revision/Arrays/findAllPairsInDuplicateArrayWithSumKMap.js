function findAllPairsInDuplicateArrayWithSumK(arr, k){
    let N = arr.length;

    let freqMap = new Map();
    for(let i=0;i<N;i++){
        if(freqMap.has(arr[i])){
            freqMap.set(arr[i], freqMap.get(arr[i])+1);
        } else {
            freqMap.set(arr[i], 1);
        }
    }

    console.log("freqMap = ", freqMap);
    
    let i = 0, j = N-1;
    let count = 0;
    while(i<j){
        let sum = arr[i] + arr[j];
        if( sum == k){
            count += freqMap.get(arr[i]) * freqMap.get(arr[j]);
            i = i + freqMap.get(arr[i]);
            j = j + freqMap.get(arr[j]);
        } else if (sum < k){
            i++;
        } else {
            j--;
        }
    }

    return count;
 }

 const arr = [1,2,3,3,10,10,10,11,11,15];

console.log(findAllPairsInDuplicateArrayWithSumK(arr, 13));