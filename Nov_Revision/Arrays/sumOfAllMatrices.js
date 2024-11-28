function sumOfAllMatrices(arr){
    let N = arr.length;
    let M = arr[0].length;

    let sum = 0;
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            let topLeft = (i+1) * (j+1);
            let bottomRight = (N-i) * (M-j);
            sum += arr[i][j] * topLeft * bottomRight;
        }
    }
    return sum;
}

const arr = [[4,9,6],[5,-1,2]];
console.log(sumOfAllMatrices(arr));