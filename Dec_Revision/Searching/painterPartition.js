function check(arr, mid, N, painters){
    let totalPainters = 1;
    let amountOfWork = 0;

    for(let i=0;i<N;i++){
        amountOfWork += arr[i];

        if(amountOfWork > mid) {
            totalPainters++; 
            amountOfWork = arr[i];
        }

    }

    if(totalPainters <= painters){
        return true;
    } else {
        return false;
    }
}

function painterPartition(arr, painters){
    let N = arr.length;

    //Search Space
    let s = Math.max(...arr);
    let e = arr.reduce((prev, curr) => prev+curr, 0);

    let ans;

    while(s<=e){
        let mid = Math.floor((s+e)/2);

        console.log(`s= ${s} e = ${e} mid = ${mid}`);

        if(check(arr, mid, N, painters)){
            ans = mid;
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }

    return ans;
}

// const arr = [10,20,30,40];
const arr = [3,5,1,7,8,2,5,3,10,1,4,7,5,4,6];
console.log(painterPartition(arr, 4))