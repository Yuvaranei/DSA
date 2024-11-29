function findAllPairsInDuplicateArrayWithSumK(arr, k){
    let N = arr.length;
    
    let i = 0, j = N-1;
    let count = 0;
    while(i<j){
        let sum = arr[i] + arr[j];
        if( sum == k){
            if(arr[i] == arr[j]){
                let totalCount = j-i+1;
                let pairs = totalCount * (totalCount - 1)/2;
                count += pairs;
                return count;
            } else {
                let icopy = i;
                let jcopy = j;

                while(arr[i] == arr[icopy] && icopy < N){
                    icopy++;
                }

                while(arr[j] == arr[jcopy] && jcopy >=0){
                    jcopy--;
                }

                icopy--;
                jcopy++;

                let totalIs = icopy-i+1;
                let totalJs = j-jcopy+1;

                count += totalIs * totalJs;
                 i = icopy + 1;
                 j = jcopy - 1;
            }
        } else if (sum < k){
            i++;
        } else {
            j--;
        }
    }

    return count;
 }

 const arr = [1,10,10,10,11,11,15];

console.log(findAllPairsInDuplicateArrayWithSumK(arr, 20));