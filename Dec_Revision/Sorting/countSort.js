function countSort(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let freqArrLength = max - min + 1;
    let freqArr = [];

    for(let i =0;i<freqArrLength;i++){
        freqArr[i] = 0;
    }

   

    for(let i=0;i<arr.length;i++){
        freqArr[arr[i] - min]++;
    }

    //  console.log("freqArr...", freqArr);

    let ans = [], k = 0;
    for(let i =0;i<freqArr.length;i++){
        if(freqArr[i] > 0){
            let count = freqArr[i];
            while(count > 0){
                ans[k] = i + min;
                k++;
                count--;
            }
        }
    }
    return ans;
}


// const arr = [];
// const arr = [3];
// const arr = [34, 9,31];
// const arr = [1, 2, 3, 4, 5];
// const arr = [5, 4, 3, 2, 1];
// const arr = [4, 2, 4, 1, 3, 1];
// const arr = [7, 7, 7, 7, 7];
// const arr = [-5, -1, -3, -2, -4];

// NOT APPLICABLE ON THIS SORT LOGIC
// const arr =[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER, -1, 1];
// const arr = [3.1, -2.4, 1.2, 0.0, 2.4];

console.log(countSort(arr));