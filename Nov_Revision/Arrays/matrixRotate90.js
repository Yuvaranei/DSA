
//Transpose and reverse

function transpose(mat){
    let N = mat.length;
    let M = mat[0].length;

    for(let i=0;i<N-1;i++){
        for(let j=1;j<M;j++){
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    return mat;
}

function reverse(arr){
    let N = arr.length;
    let i=0;
    let j = N-1;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

function rotate90(arr){
    const N = arr.length;
    // const M = arr[0].length;

    let rotatedMatrix = transpose(arr);
    for(let i=0;i<N;i++){
        let rowData = rotatedMatrix[i];
        rotatedMatrix[i] = reverse(rowData);
    }
    return rotatedMatrix;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(rotate90(arr));