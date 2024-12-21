function selectionSort(arr){
    const N = arr.length;
    for(let i=0;i<N;i++){
        let min = arr[i];
        let minIndex = i;

        for(let j=i+1;j<N;j++){
            if(arr[j] < min){
                min = arr[j];
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


const arr = [5,2,1,-8,4,3, Number.MIN_SAFE_INTEGER, 0,0,3,Number.MAX_SAFE_INTEGER];
console.log(selectionSort(arr));