function printBClosestPoints(arr){
    arr.sort((a,b) => {
        // console.log("a[0]^2...", (a[0] * a[0]));
        let aValue = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
        let bValue = Math.sqrt((b[0] * b[0]) + (b[1] * b[1]));
        return aValue - bValue;
    })
    return arr;
}


// const arr = [[1,3], [-2,2]];
const arr = [[3,3], [5, -1], [-2,4]];
const B=2;

printBClosestPoints(arr);
console.log(arr.slice(0, B));