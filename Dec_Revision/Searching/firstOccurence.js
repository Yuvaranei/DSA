function firstOccurence(arr, target){
    let N = arr.length;
    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);

        if(arr[mid] == target && (mid == 0 || arr[mid-1] != arr[mid])){
            return mid;
        } else if(arr[mid] >= target){
            e = mid -1
        } else {
            s=mid+1;
        }
    }
    return -1;
}

const arr = [1,3,3,3,4,4,5,6,6,6,6];
console.log(firstOccurence(arr, 7));