function maxConsecutive1WithSwap(arr){
    let N = arr.length;
    let maxCount = 0;

    let i=0; let totalCount = 0;
    while(i<N){
        if(arr[i] == 1){
            totalCount++;
        }
        i++;
    }

    if(totalCount == N)
        return N;

    for(let i=0;i<N;i++){
        if(arr[i] == 0){
            let count = 0;
            let x=i-1;
            let y = i+1;

            while(x>=0 && arr[x] == 1){
                count++;
                x--;
            }

            while(y<N && arr[y] == 1){
                count++;
                y++;
            }

            if(totalCount > count){
                maxCount = Math.max(maxCount, count+1);
            } else {
                maxCount = Math.max(maxCount, count);
            }
        }
    }
    return maxCount;
}

// let arr = [1,1,0,1,1,0,1,1];
// let arr = [1,1,1,1,1,1,1,1];
// let arr = [0,0,0,0,0,0,0,0];
let arr = [1,1,0,1,1,1,0,1];
console.log(maxConsecutive1WithSwap(arr));