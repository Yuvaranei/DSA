function findSmallestNumber(arr){
    arr.sort((a,b) => {
        return Number(""+a+b) - Number(''+b+a);
    });
    return arr.join('');
}

const arr = [3,12,4,66];
console.log(findSmallestNumber(arr));
