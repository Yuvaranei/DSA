/*
    Idea: Since A[i] > B[j] we need to sort the array first
    If any element in B is lesser than an element in A, that means that element in B
    is lesser than all the elements from ith index to N

    TC: NlogN + MlogM + N + M [Sort A and B, then iterate over N and M to compare]
    SC: O(1)
*/

function NoOfPairsAGreaterThanB(A, B){
    const sortedA = A.sort((a,b) => a-b);
    const sortedB = B.sort((a,b) => a-b);

    const N = A.length;
    const M = B.length;


    let i=0;
    let j=0;

    let count = 0 ;

    while(i<N && j<M){
        if(sortedA[i] <= sortedB[j]){
            i++;
        } else {
            count = count + (N-i);
            j++;
        }
    }
    return count;
}

// const A = [7, 3, 5];
// const B = [2, 0, 6];

const A = [6,10,8,3,15];
const B = [7,2,12,18,1];

console.log(NoOfPairsAGreaterThanB(A, B));