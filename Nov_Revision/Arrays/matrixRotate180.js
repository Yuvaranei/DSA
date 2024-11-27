
//Reverse the whole array

function rotate180(arr){
    const N = arr.length;
    const M = arr[0].length;

    let rotatedMatrix = [];
   for(let x=0, i=N-1;x<N, i>=0;x++, i--){
    let tempArr = [];
    for(let y=0, j=M-1;y<M, j>=0;y++, j--){
        tempArr.push(arr[i][j]);
    }
    rotatedMatrix.push(tempArr);
   }
    return rotatedMatrix;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(rotate180(arr));