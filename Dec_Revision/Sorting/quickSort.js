function swap(arr, left, right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function quickSort(arr, first, right){
    if(arr.length == 0) return arr;
    if(first > right) return;
    let lastIndex = right;
    let pivot = arr[first];
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
    quickSort(arr, first, right-1);
    quickSort(arr, right+1, lastIndex);
    return arr;
}

// function quickSortAlgo(arr, first, right){

// }

// const arr = [9, 23, 47, -5, 8, 91, 14, 50, 3, 36];
// const arr = [1, 2, 3, 4, 5];
const arr = [7, 7, 7, 7, 7];
// const arr = [-5, -1, -3, -2, -4];
// const arr = [4, 2, 4, 1, 3, 1];
// const arr =[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER, -1, 1];
// const arr = [3.1, 2.4, -1.2, 0.0, 2.4];
// const arr = [5, 4, 3, 2, 1];
// const arr = [];
// const arr = [3];
console.log(quickSort(arr, 0, (arr.length)-1));