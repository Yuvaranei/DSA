
function printTranspose(arr){
    const N = arr.length;
    const M = arr[0].length;

    let transposeMatrix = arr;
    for(let i=0;i<N-1;i++){
        for(let j=i+1;j<M;j++){
            let temp = transposeMatrix[i][j];
            transposeMatrix[i][j] = transposeMatrix[j][i];
            transposeMatrix[j][i] = temp;
        }
    }
    return transposeMatrix;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(printTranspose(arr));