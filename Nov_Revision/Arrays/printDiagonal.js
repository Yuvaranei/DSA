
function printDiagonal(arr){
    const N = arr.length;
    const M = arr[0].length;

    let diagonal = [];
    
    let i=0, j=0;
    while(i<N && j<M){
        diagonal.push(arr[i][j]);
        i++;
        j++;
    }

    i=0;
    j=M-1;
    while(i<N && j>=0){
        diagonal.push(arr[i][j]);
        i++;
        j--;
    }

    return diagonal;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(printDiagonal(arr));