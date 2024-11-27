
function sumOfSubarrays(arr){
    const N = arr.length;
    let sum = 0;

    const pf= [];
    pf[0] = arr[0];

    for(let i=1;i<N;i++){
        pf[i] = arr[i] + pf[i-1];
    }

    for(let s=0;s<N;s++){
        for(let e=s;e<N;e++){
            if(s==0){
                sum += pf[e];
            } else {
                sum += pf[e] - pf[s-1]
            }
        }
    }
    return sum;
}

const arr = [1,2,3];
console.log(sumOfSubarrays(arr));