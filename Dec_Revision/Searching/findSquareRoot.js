function findSquareRoot(num){
    let s=1, e=num ;
    let ans = 0;
    while(s<=e){
        let mid = Math.floor((s+e)/2);
        let square = mid * mid;
        if(square == num) {
            return mid;
        }
        else if(square > num ){
            e = mid - 1;
        } else {
            s = mid + 1;
            ans = mid;
        }
    }
    return ans;
}

console.log(findSquareRoot(9));