/*
    Idea:
        1. Do binary search and find the element
        2. Check if that element is the last occurance
        3. If not, do binary search on the right side of the element till Array ends

    TC: O(log N)
    SC: O(1)
*/

function findLastOccuranceEleInSortedArray(A, ele, start, end){
    const N = A.length - 1;
    if(start > end)  return;
    let mid = Math.floor((start+end)/2);
    // console.log("Start = ",start, " Mid = ",mid, " End = ",end);
    if(A[mid] === ele){
        // console.log("Found same ele at index" , mid);
        if((mid === N|| A[mid+1] !== ele)) return mid;
        else start = mid +1;
    }
    else if(A[mid] > ele){
        end = mid-1;
    } else {
        start = mid+1;
    }
    return findLastOccuranceEleInSortedArray(A, ele, start, end);
}


const A =  [2,2,5,5,5,5,8,10,10,13,13,13,13];

const result = findLastOccuranceEleInSortedArray(A, 10, 0, A.length-1);

console.log("Last occurance of an element in an array = ",result == undefined? -1 : result);

module.exports = {
    findLastOccuranceEleInSortedArray
}