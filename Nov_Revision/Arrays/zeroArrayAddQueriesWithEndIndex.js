function zeroArrayAddQueriesWithEndIndex(arr, queries){
    let N = arr.length;
    
    for(let i=0;i<queries.length;i++){
        arr[queries[i][0]] = arr[queries[i][0]] + queries[i][2];

        if(queries[i][1]+1 < N){
            arr[queries[i][1]+1] -= queries[i][2]
        }
    }

    for(let i=1;i<N;i++){
        arr[i] = arr[i] + arr[i-1];
    }

    return arr;
}

const arr = [0,0,0,0,0,0,0];

const queries = [[1,3,2], [2,5,3], [5,6,-1]];
console.log(zeroArrayAddQueriesWithEndIndex(arr, queries));