/*
    Count the frequency of elements in the array in an orderly fashion
    Print them

    TC: O(N)
    SC: O(R) where R is the range of min and max elements
*/

/*
    Question variation: Find the smallest number that can be formed by rearranging
    the digits given in an array
*/

function countSort(A){
    let minEle = Math.min(...A);
    let maxEle = Math.max(...A);

    let freq = []; //max-min+1
    for(let i=0;i<(maxEle-minEle+1);i++){
        freq[i] = 0;
    }
    
    for(let i=0;i<A.length;i++){
        freq[A[i]-minEle] = freq[A[i]-minEle]+1;
    }

    let arr = []
    for(let i=0;i<(maxEle-minEle+1);i++){
        for(let count=0;count<freq[i];count++){
            arr.push(i+minEle);
        }
    }
    return arr;
}


const A = [40000,2,5,700000,12,32];

console.log(countSort(A));