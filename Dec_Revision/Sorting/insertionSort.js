function insertionSort(arr){
    let N = arr.length;

    for(let i=1;i<N;i++){
        let currEle = arr[i];
        let j=i-1;

        while(j>=0 && arr[j] > currEle){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currEle;
    }

    return arr;
}


const arr = [3,8,5,1];
console.log(insertionSort(arr));