/*
    Mostly applied to sorted array search
    Target is known
    Search Space is known
    Array is sorted

    TC: O(log N)
    SC: O(1)
*/

function binarySearch(A, ele, start, end){
    if(start === end) return;
    let mid = Math.floor((start+end)/2);
    if(A[mid] === ele) return mid;
    if(A[mid] > ele){
        end = mid-1;
    } else {
        start = mid+1;
    }
    return binarySearch(A, ele, start, end);
}

const A = [1,2,3,4,5,6,7,8,9];

const result = binarySearch(A, 90, 0, A.length);

console.log("Index is ",result || -1);