function findPeakElement(arr){
    let N = arr.length;

    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);

        if((mid == 0 || arr[mid] > arr[mid -1]) && (mid == N-1 || arr[mid] > arr[mid+1])){
            return arr[mid];
        } else if(mid == N-1 || arr[mid] > arr[mid+1]){
            e = mid -1;
        } else {
            s=mid+1;
        }
    }
}

const arr = [7,8,9,10,12,13,33,2];
console.log(findPeakElement(arr));