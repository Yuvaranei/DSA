function findElementInSortedMatrix(arr, k){
    let N = arr.length;
    let M = arr[0].length;
    
    let i=0, j=M-1;

    while(i<N && j>=0){
        if(arr[i][j] == k)
            return true;
        else if(arr[i][j] > k){

            j--;
        } else {
            i++;
        }
    }
    return false;
}

const arr = [[-5,-2,1,13],[-4,0,3,14],[-3,2,6,18]];
const k = 6;
console.log(findElementInSortedMatrix(arr, k));