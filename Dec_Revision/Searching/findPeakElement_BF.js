function findPeakElement(arr){
    let i=0, j=1, N = arr.length;

    while(j<=N-1 && arr[i] < arr[j]){
        i++;
        j++;
    }
    return arr[i];
}

const arr = [7,8,9,10,12,13];
console.log(findPeakElement(arr));