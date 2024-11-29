function checkSubArrWithSumK(arr, k){
    let N = arr.length;

    let i=0, j=0, sum = arr[0];

    while(j<N){
        if(sum == k){
            return true
        } else if(sum < k){
            j++;

            if(j<N){
                sum += arr[j];
            }
        } else {
            sum -= arr[i];
            i++;

            //Edgecase when i exceeds j
            if(i>j && i<N){
                j++;
                sum += arr[j];
            }
        }
    }
    return false;
 }

 const arr = [1,3,15,10,20,3,23];

console.log(checkSubArrWithSumK(arr, 33));