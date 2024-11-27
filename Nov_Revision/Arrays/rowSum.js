
function rowSum(arr){
    const N = arr.length;
    const M = arr[0].length;

    let sumArr = [];
    for(let i=0;i<N;i++){
        let sum = 0;
        for(let j=0;j<M;j++){
            sum += arr[i][j];
        }
        sumArr.push(sum);
    }
    return sumArr;
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(rowSum(arr));