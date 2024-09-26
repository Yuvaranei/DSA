function quickSort(arr, low, high){
    if(low < high){
        let partitionIndex = getPartitionIndex(arr, low, high);
        quickSort(arr, low, partitionIndex-1);
        quickSort(arr, partitionIndex+1, high);
        return arr;
    }
}


function getPartitionIndex(arr, low, high){
    let i = low;
    let j = high;
    let pivot = arr[low];

    while(i<j){
        while(arr[i] <= pivot && i <= high-1){
            i++;
        }

        while(arr[j] > pivot && j >= low+1){
            j--;
        }
        
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;

}

let arr = [4,6,2,5,7,9,1,3];

let result = quickSort(arr, 0, arr.length-1);

console.log("Sorted Array... ", result);