function firstOccurence(arr, num){
    let N = arr.length;
    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] == num && (mid==0 || arr[mid] != arr[mid-1])){
            return mid;
        } else if(arr[mid] >= num){
            e = mid -1;
        } else {
            s = mid +1;
        }
    }
    // return -1;
}

function lastOccurence(arr, num){
    let N = arr.length;
    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] == num && (mid==N-1 || arr[mid] != arr[mid+1])){
            return mid;
        } else if(arr[mid] <= num){
            s = mid +1;
        } else {
            e = mid -1;
        }
    }
    // return -1;
}

function totalOccurance(arr, num){
    let left = firstOccurence(arr, num);
    let right = lastOccurence(arr, num);
    console.log("Array = ", arr, " num = ",num);
    console.log(`left = ${left} right = ${right}`);
    return right - left +1;
}

const arr = [1,2,2,2,3,3,3,3,5,5,6];
console.log(totalOccurance(arr, 9));