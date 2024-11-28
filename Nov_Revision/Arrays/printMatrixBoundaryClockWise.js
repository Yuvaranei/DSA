function printMatrixBoundaryClockWise(arr){
    let N = arr.length;
    let M = arr[0].length;
    
    let count = N-1;

    // let arr = [];
    let i=0, j=0;
    //top left to right
    for(let x=0;x<count;x++){
        console.log(arr[i][j])
        j++;
    }
     console.log()

    //top right to bottom right
    for(let x=0;x<count;x++){
        console.log(arr[i][j])
        i++;
    }
    console.log()

    //bottom right to bottom left
    for(let x=0;x<count;x++){
        console.log(arr[i][j])
        j--;
    }
     console.log()

    //bottom left to top left
    for(let x=0;x<count;x++){
        console.log(arr[i][j])
        i--;
    }
}

const arr = [[-5,-2,1,13],[-4,0,3,14],[-3,2,6,18], [3,5,2,1]];
console.log(printMatrixBoundaryClockWise(arr));