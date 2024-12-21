function merge(arr, left, mid, right){
    let c = [], k=0;
    let i = left, j=mid+1, count = 0;
    while(i<=mid && j<=right){
        if(arr[i] <= arr[j]){
            c[k] = arr[i];
            k++;
            i++;
        } else {
            count = count + mid - i + 1;
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

    i=left, k=0;
    while(i<=right){
        arr[i] = c[k];
        i++;
        k++;
    }

    return count;
}

function findPairsFromAnArray(arr, left, right){
    if(left == right) return 0;
    let mid = Math.floor((left + right)/2);
    let x = findPairsFromAnArray(arr, left, mid);
    let y = findPairsFromAnArray(arr, mid+1, right);
    let z = merge(arr, left, mid, right);
    return x+y+z;
}

const arr = [10,3,8,15,6];
const ans = findPairsFromAnArray(arr, 0, arr.length - 1);
console.log(ans);