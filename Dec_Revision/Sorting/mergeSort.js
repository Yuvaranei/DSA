function merge(arr, left, mid, right){
    let i = left, j = mid+1;
    let c = [], k=0;
    while(i<=mid && j<=right){
        if(arr[i]<=arr[j]){
            c[k] = arr[i];
            k++;
            i++;
        } else {
            c[k] = arr[j];
            k++;
            j++;
        }
    }
    while(i<=mid){
        c[k] = arr[i];
        k++;
        i++;
    }
    while( j<=right){
        c[k] = arr[j];
        k++;
        j++;
    }

    let a = left, b=0;
    while(a<=right){
        arr[a] = c[b];
        b++;
        a++;
    }
}

function mergeSort(arr, left, right){
    if(arr.length == 0) return arr;
    if(left == right) return arr;
    let mid = Math.floor((left+right)/2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right);
    return arr;
}

// const arr = [9, 23, 47, -5, 8, 91, 14, 50, 3, 36];
// const arr = [1, 2, 3, 4, 5];
// const arr = [7, 7, 7, 7, 7];
// const arr = [-5, -1, -3, -2, -4];
// const arr = [4, 2, 4, 1, 3, 1];
// const arr =[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER, -1, 1];
const arr = [3.1, 2.4, -1.2, 0.0, 2.4];
// const arr = [5, 4, 3, 2, 1];
// const arr = [];
// const arr = [3];
console.log(mergeSort(arr, 0, (arr.length)-1));