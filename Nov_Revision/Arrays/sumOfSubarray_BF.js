
function sumOfSubarrays(arr){
    const N = arr.length;
    let sum = 0;
    for(let s=0;s<N;s++){
        for(let e=s;e<N;e++){
            for(let i=s; i<=e;i++){
                sum = sum + arr[i];
            }
        }
    }
    return sum;
}

const arr = [1,2,3];
console.log(sumOfSubarrays(arr));