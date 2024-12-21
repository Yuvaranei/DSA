function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function parition(arr, start, end){
    let pivot = Math.floor(Math.random() * (end - start + 1)) + start;
    let left = start + 1;
    let right = end;

    swap(arr, start, pivot);

    pivot = arr[start];


    while(left <= right){
        if(arr[left] <= pivot) left++;
        else if(arr[right] > pivot) right--;
        else {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    swap(arr, start, right);
    return right;
}

function quickSort(arr, start, end){
    if(start >= end) return;
    let pivotedIndex = parition(arr, start, end);
    quickSort(arr, start, pivotedIndex-1);
    quickSort(arr, pivotedIndex+1, end);
}


// const arr = [34, 9,31];
// const arr = [1, 2, 3, 4, 5];
// const arr = [7, 7, 7, 7, 7];
// const arr = [-5, -1, -3, -2, -4];
// const arr = [4, 2, 4, 1, 3, 1];
// const arr =[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER, -1, 1];
// const arr = [3.1, -2.4, 1.2, 0.0, 2.4];
const arr = [5, 4, 3, 2, 1];
// const arr = [];
// const arr = [3];

let N = arr.length;
quickSort(arr, 0, N-1);

console.log(arr);


