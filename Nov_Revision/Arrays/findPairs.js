function findPairs(arr){
    let N = arr.length;
    let count = 0;
    let totalCount = 0;
    for(let i=N-1;i>=0;i--){
        if(arr[i] == 'g') count++;
        if(arr[i] == 'a'){
            totalCount += count;
        }
    }
    return totalCount;
}

const arr = ['a', 'b', 'e', 'g', 'a', 'g'];
console.log(findPairs(arr))