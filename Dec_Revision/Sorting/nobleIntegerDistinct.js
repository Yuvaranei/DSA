function nobleIntegerDistinct(arr){
    arr.sort((a,b) => a-b);

    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == i) count++;
    }

    return count;
}

const arr = [1,-5,3,-10,4];
console.log(nobleIntegerDistinct(arr));