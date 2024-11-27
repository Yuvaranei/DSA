
function printAntiDiagonalNonSquare(arr){
    const N = arr.length;
    const M = arr[0].length;

    let diagonal = [];
    
    function printAntiDiagonal(i, j, mat){
        let row = i, col = j;
        while(row<N && col >=0){
            diagonal.push(mat[row][col]);
            row++;
            col--;
        }
    }

    let row = 0;
    for(let col=0;col<M;col++){
        printAntiDiagonal(row, col, arr);
    }

    let col = M-1;
    for(let row=1;row<N;row++){
        printAntiDiagonal(row, col, arr);
    }

    return diagonal;
}

const arr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
console.log(printAntiDiagonalNonSquare(arr));