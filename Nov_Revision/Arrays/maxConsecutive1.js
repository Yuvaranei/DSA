function maxConsecutive1(arr){
    let N = arr.length;
    let maxCount = 1;

    let i=0; let count = 0;
    while(i<N && arr[i] == 1){
        count++;
        i++;
    }

    if(count == N)
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

            maxCount = Math.max(maxCount, count+1);
        }
    }
    return maxCount;
}

let arr = [1,1,0,1,1,0,1,1];
// let arr = [1,1,1,1,1,1,1,1];
// let arr = [0,0,0,0,0,0,0,0];
console.log(maxConsecutive1(arr));