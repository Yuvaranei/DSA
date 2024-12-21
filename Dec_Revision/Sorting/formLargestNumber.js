function formLargestNumber(arr){
    arr.sort((a,b) => {
        let strA = a+String(b);
        let strB = b+String(a);
        // console.log("strA...", strA);
        // console.log("strB...", strB);
        const diff =  Number(strB) - Number(strA);
        // console.log("diff = ", diff);
        return diff;
    })
    // console.log(arr);
}

// const arr = [10, 2];
const arr = [3,30,34,5,9];
formLargestNumber(arr);
console.log(arr.join(''));