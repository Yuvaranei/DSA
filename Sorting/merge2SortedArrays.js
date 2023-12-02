/*
    Given 2 sorted arrays of size N and M, merge and return new sorted array

    TC:
*/

function merge2SortedArrays(A, B, N, M){
    let i=0;
    let j=0;
    let k=0;

    let C = [];

    while(i<N && j<M){
        if(A[i] <= B[j]){
            C[k] = A[i];
            i++;
            k++;
        } else {
            C[k] = B[j];
            j++;
            k++;
        }
    }

    while(i<N){
        C[k] = A[i];
        i++;
        k++;
    }

    while(j<M){
        C[k] = B[j];
        j++;
        k++;
    }
    return C;cle
}

const A = [2,5,7,12,20];
const B = [6,9,10,14,18,19];

console.log(merge2SortedArrays(A,B, A.length, B.length));