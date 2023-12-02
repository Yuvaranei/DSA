/*
    Given an array of size N and 3 indicies l,y,r.
    Subarray 1 - l -> y
    Subarray 2 - y+1 -> r
    Sort the subarray from l->R

    TC: O(N)
    SC: O(N)
*/

function sortSubarray(A,l,y,r){
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


const A = [8,1,3,6,11,2,4,9,7,6];

console.log(sortSubarray(A,2,4,7));