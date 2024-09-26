/*
    1. Since element occurs twice 1st twin at even Index and 2nd twin at odd index
    2. Do binary search and see if the twin indices are changing
    3. Go in that direction


    Target: Unknown

*/

function everyEleOccursTwiceExceptOne(A, start, end){
    if(start >= end ) return;
    let mid = Math.floor((start+end)/2);
    let twinIndex;
    if(mid ==0 || (A[mid] !== A[mid-1]) && (mid == A.length - 1 || A[mid] !== A[mid+1])) return A[mid];
    if(A[mid] === A[mid-1]) twinIndex = mid - 1;
    else twinIndex = mid;

    if(twinIndex % 2 === 0) start = mid + 1;
    else end = mid - 1;
    return everyEleOccursTwiceExceptOne(A, start, end);
}


const A = [1,1,5,5,7,7,13,13,17,18,18];
const result = everyEleOccursTwiceExceptOne(A, 0, A.length - 1);
console.log("Element which occurs only once is ",result);