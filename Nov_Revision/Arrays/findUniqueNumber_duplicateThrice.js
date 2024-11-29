function findUniqueNumber_duplicateThrice(arr){
    let N = arr.length;
    let ans = 0;
    for(let i=0;i<32;i++){
        let count = 0;
        for(let j=0;j<N;j++){
            if((arr[j] & (1<<i)) != 0){
                count++;
            }
        }

        if(count % 3 == 1){
            ans = ans | (1<<i);
        }
    }
    return ans;
 }

 const arr = [2,4,2,4,3,3,8,2,4,10,3,8,8];

console.log(findUniqueNumber_duplicateThrice(arr));