function medianOf2SortedArray(arr1, arr2){
    const N = arr1.length;
    const M = arr2.length;

    if(N > M){
        return medianOf2SortedArray(arr2, arr1);
    }

    let leftCount = (N+M)%2 == 0 ? Math.floor((N+M)/2) : Math.floor((N+M)/2)+1;
    // let rightCount = (N+M) - leftCount;

    let s = 0, e =N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        let l1 = arr1[mid];
        let left1ElementsPicked = mid +1;
        let left2ElementsToBePicked = leftCount - left1ElementsPicked;
        let l2 = left2ElementsToBePicked - 1 < 0 ? Number.NEGATIVE_INFINITY : arr2[left2ElementsToBePicked - 1];

        let r1 = mid+1 > N-1 ? Number.POSITIVE_INFINITY :  arr1[mid+1];
        let r2 = left2ElementsToBePicked > M-1 ? Number.POSITIVE_INFINITY : arr2[left2ElementsToBePicked];

        console.log(`mid = ${mid} left1ElementsPicked = ${left1ElementsPicked} left2ElementsToBePicked = ${left2ElementsToBePicked}`);
        console.log(`l1 = ${l1} l2 = ${l2} r1 = ${r1} r2 = ${r2}`);

        if(l1 <= r2 && l2 <= r1){
            let ans;
            if((N+M) % 2 == 0){
                ans = (Math.max(l1, l2) + Math.min(r1, r2))/2;
            } else {
                ans = Math.max(l1, l2);
            }
            return ans;
        }
        else if(l1>=r2){
            e = mid - 1;
        } else {
            s = mid +1;
        }
    }
}

const arr1 = [1,2,3,8];
const arr2 = [4,5,6];

console.log(medianOf2SortedArray(arr1, arr2));