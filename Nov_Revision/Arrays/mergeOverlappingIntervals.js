function mergeOverlappingIntervals(arr){
    let N = arr.length;

    let intervals = [];

    let s1 = arr[0][0];
    let e1 = arr[0][1];
    let s2, e2;

    for(let i=1;i<N;i++){
        s2 = arr[i][0];
        e2 = arr[i][1];

        if(s2 <= e1){
            e1 = Math.max(e1,e2);
        } else {
            intervals.push([s1,e1]);
            s1 = s2;
            e1 = e2;
        }
    }
    intervals.push([s1,e1]);
    return intervals;
}

const arr = [[0,2],[1,4],[5,6],[6,8],[7,13],[8,9],[12,14]];
console.log(mergeOverlappingIntervals(arr));