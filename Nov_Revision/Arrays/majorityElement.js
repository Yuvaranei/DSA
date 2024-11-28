function majorityElement(arr){
    let N = arr.length;

    let majorityEle = arr[0], count = 1;

    for(let i=1;i<N;i++){
        if(majorityEle == -1){
            majorityEle = arr[i];
            count = 1;
        } 
        else if(arr[i] == majorityEle){
            count++;
        }
        else {
            count--;
            majorityEle = -1
        }
    }
    console.log("majorityEle...",majorityEle);
    if(majorityEle != -1){
        let candidateCount = 0;
        for(let i=0;i<N;i++){
            if(arr[i] == majorityEle){
                candidateCount++
            }
        }

        if(candidateCount > N/2){
            return majorityEle;
        }
    }
    return "No Majority Element";
}

// const arr = [3,4,3,2,4,4,4,4];
// const arr = [2,1,4];
// const arr = [3,3,4,2,4,4,2,4];
const arr = [3,4,3,6,1,3,2,5,3,3,3];
console.log(majorityElement(arr));