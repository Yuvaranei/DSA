function printAllSubsets(currSubset, index, arr){
    if(index == arr.length){
        console.log(currSubset);
        return;
    }
    currSubset.push(arr[index]);
    printAllSubsets(currSubset, index+1, arr);

    currSubset.pop();
    printAllSubsets(currSubset, index+1, arr);
 }

const arr = [1,2,3,4];
console.log(printAllSubsets([], 0, arr, 0));