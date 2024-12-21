function swap(arr, left, right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function partition(arr, first, right){
    if(arr.length == 0) return arr;
    if(first > right) return;

    let pivot = Math.floor(Math.random() * (right - first + 1)) + first;
    
    let temp = arr[first];
    arr[first] = arr[pivot];
    arr[pivot] = temp;
    
    pivot = arr[first];
    let left = first + 1;

    while(left <= right){
        if(arr[left] <= pivot){
            left++;
        } else if (arr[right] > pivot){
            right--;
        } else {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    swap(arr, first, right);
    return right;
}

function randomisedQuickSort(arr, start, end){
    if(start >= end) return;
    let pivotedIndex = partition(arr, start, end);
    randomisedQuickSort(arr, start, pivotedIndex-1);
    randomisedQuickSort(arr, pivotedIndex+1, end);
}




// const arr = [34, 9,31];
// const arr = [1, 2, 3, 4, 5];
// const arr = [7, 7, 7, 7, 7];
const arr = [-5, -1, -3, -2, -4];
// const arr = [4, 2, 4, 1, 3, 1];
// const arr =[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER, -1, 1];
// const arr = [3.1, -2.4, 1.2, 0.0, 2.4];
// const arr = [5, 4, 3, 2, 1];
// const arr = [];
// const arr = [3];
randomisedQuickSort(arr, 0, (arr.length)-1);
console.log(arr);