function zeroArrayAddQueries(arr, queries){
    let N = arr.length;
    
    for(let i=0;i<queries.length;i++){
        arr[queries[i][0]] = arr[queries[i][0]] + queries[i][1];
    }

    for(let i=1;i<N;i++){
        arr[i] = arr[i] + arr[i-1];
    }

    return arr;
}

const arr = [0,0,0,0,0,0,0];

const queries = [[1,3], [4,2], [3,1]];
console.log(zeroArrayAddQueries(arr, queries));