function findUniqueNumber_xor(arr){
    let xor = 0;
    for(let i=0;i<arr.length;i++){
        xor = xor ^ arr[i];
    }
    return xor;
 }

 const arr = [2,4,2,4,3];

console.log(findUniqueNumber_xor(arr));