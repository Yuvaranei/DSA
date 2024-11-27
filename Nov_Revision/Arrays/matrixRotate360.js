
//Reverse and Transpose

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

function rotate360(arr){
    const N = arr.length;

    for(let i=0;i<N;i++){
        arr[i] = reverse(arr[i]);
    }

    let rotatedMatrix = transpose(arr);
   
    return rotatedMatrix;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(rotate360(arr));