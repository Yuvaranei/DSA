function printMatrixSpiralClockWise(arr){
    let N = arr.length;
    let M = arr[0].length;


    
    let count = N-1;
    let i=0, j=0;

    while(count > 0) {
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

        count -= 2;
        i++;
        j++;
    } 

    // console.log("count = ", count)
    if(count !=  -1)
    console.log(arr[i][j]);
}

const arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]];
printMatrixSpiralClockWise(arr)