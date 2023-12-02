/*
    Inversion count is a measure of how unsorted an array is. 
    It counts the number of pairs of elements that are out of order in the array

    TC: O(NlogN)
    SC: O(N)
*/

function merge(A, left, mid, right){
    let i=left;
    let j=mid+1;
    let k=0;
    let count = 0;
    let temp = [];

    while(i<=mid && j<=right){
        if(A[i] <= A[j]){
            temp[k] = A[i];
            i++;
            k++;
        } else {
            temp[k] = A[j];
            j++;
            k++;
            count = count + (mid - i + 1);
        }
    }

    while(i<=mid){
        temp[k] = A[i];
        i++;
        k++;
    }

    while(j<=right){
        temp[k] = A[j];
        j++;
        k++;
    }

    let tempK = 0;
    for(let i=left;i<=right;i++){
        A[i] = temp[tempK];
        tempK++;
    }

    return count;
}

function inversionCount(A, left, right){
    if(left === right) return 0;
    let mid = Math.floor((left+right)/2);
    let x = inversionCount(A, left, mid);
    let y = inversionCount(A, mid+1, right);
    let z = merge(A, left, mid, right);
    return x+y+z;
}

const A = [2,4,1,3,5];
console.log(inversionCount(A, 0, A.length-1));
console.log("Sorted Array: ", A);