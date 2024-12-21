function findSingleElement(arr){
    let N = arr.length;
    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        let twinIndex;
        if((mid == 0 || arr[mid] != arr[mid-1]) && (mid == N-1 || arr[mid] != arr[mid+1])){
            return arr[mid];
        } else if(mid == 0 || arr[mid] == arr[mid-1]){
            twinIndex = mid-1;
        } else {
            twinIndex = mid;
        }

        console.log(`s = ${s} e = ${e} mid = ${mid} twinIndex = ${twinIndex}`);

        if(twinIndex % 2 == 0){
            s = mid +1;
        } else {
            e = mid - 1;
        }
    }
}

const arr = [1,2,2, 3,3,4,4];
console.log(findSingleElement(arr));