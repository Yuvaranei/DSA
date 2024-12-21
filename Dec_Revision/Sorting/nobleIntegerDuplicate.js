function nobleIntegerDuplicate(arr){
    arr.sort((a,b) => a-b);

    let num = 0, count = 0;

    if(arr[0] == 0) count++;

    for(let i=1;i<arr.length;i++){
        if(arr[i] != arr[i-1]){
            num = i;
        }

        if(num == arr[i]) count++;
    }

    return count;
}

const arr = [-10, 1,1,2,2,3];
console.log(nobleIntegerDuplicate(arr));