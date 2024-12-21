function rotatedSortedArray(arr, target){
    const N = arr.length;

    let s = 0, e = N-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(target == arr[mid]){
            return mid;
        }
        else if(target>=arr[0]) { //target is in part1
            if(arr[mid] >=arr[0]){ //mid is also in part 1
                if(target >= arr[mid]){
                    s = mid +1;
                } else {
                    e = mid - 1;
                }
            } else { //mid is in part2
                e = mid - 1;
            }
        } else { //target is in part2
            if(arr[mid] >arr[0]){ //mid is in part 1
                s = mid + 1;
            } else { //mid is in part2
                if(target > arr[mid]){
                    s = mid +1;
                } else {
                    e = mid - 1;
                }
            }
        }
    }
    return -1;
}


const arr = [6,7,8,1,2]
const target = 3;
console.log(rotatedSortedArray(arr, target));
