/*
    Divide the array into subarray
    Merge the 2 sorted subarray to a new sorted array

    TC: O(N log N) // Divide the array into 2 halves take log N and merge the array of N elements
    SC: O(N) // Takes N space to store the temp array 
*/

function merge(A,l,y,r){
    let i=l;
    let j=y+1;
    let k=0;
    let C = [];

    while(i<=y && j<=r){
        if(A[i] <= A[j]){
            C[k] = A[i];
            i++;
            k++;
        } else {
            C[k] = A[j];
            j++;
            k++;
        }
    }

    while(i<=y){
        C[k] = A[i];
        i++;
        k++;
    }

    while(j<=r){
        C[k] = A[j];
        j++;
        k++;
    }

    let m = 0;
    for(let i=l;i<=r;i++){
        A[i] = C[m];
        m++;
    }
    return A;
}

function mergeSort(A, left , right){
    if(left === right) return;
    let mid = Math.floor((left+right)/2);
    mergeSort(A, left, mid);
    mergeSort(A, mid+1, right);
    return merge(A, left, mid, right);
}

const A = [3,10,6,8,15,2,12,18,17];

console.log(mergeSort(A, 0, A.length-1));