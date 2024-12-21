function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function sort(arr){
    let N = arr.length;
    for(let i=0;i<N-1;i++){
        let lastEle = arr[N-1];

        for(let j=0;j<N;j++){
            if(lastEle < arr[j]){
                swap(arr, N-1, j);
                continue;
            }
        }
    }
    return arr;
}

const arr = [4,5,8,2,1,3];
console.log(sort(arr));