function check(arr, mid, N, cows){
    let totalCows = 1, distance = arr[0];

    for(let i=1;i<N;i++){
        if(arr[i] - distance >= mid){
            totalCows++;
            distance = arr[i];
        }
    }

    if(totalCows<cows){
        return false;
    } else {
        return true;
    }
}

function aggressiveCows(arr, cows){
    let N = arr.length;

    let s = Number.MAX_SAFE_INTEGER;
    let e = arr[N-1] - arr[0];
    for(let i=1;i<N;i++){
        s = Math.min(s, arr[i] - arr[i-1]);
    }

    let ans = e;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        console.log(`s= ${s} e = ${e} mid = ${mid}`);
        if(check(arr, mid, N, cows)){
            // ans = Math.min(ans,mid);
            ans = mid;
            s = mid +1; 
        } else {
            e = mid - 1;
        }
    }
    return ans;
}

const arr = [1,2,4,8,9];
// const arr = [2,6,11,14,19,25,30,39,43];
const cows = 3;
console.log(aggressiveCows(arr, cows));