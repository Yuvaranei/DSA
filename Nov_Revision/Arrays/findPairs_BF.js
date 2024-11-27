function findPairs(arr){
    let N = arr.length;
    let count = 0;
    for(let i=0;i<N;i++){
        if(arr[i] == 'a'){
            // console.log("i = ", i)
            for(let j=i+1;j<N;j++){
                if(arr[j] == 'g'){
                    // console.log("j = ", j)
                    count++;
                }
            }
        }
    }
    return count;
}

const arr = ['a', 'b', 'e', 'g', 'a', 'g'];
console.log(findPairs(arr))