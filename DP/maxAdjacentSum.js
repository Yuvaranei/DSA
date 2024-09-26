function maxAdjacentSum(i, A, dp){
    if(i < 0) return 0;
    if(i == 0) return A[i];

    if(dp[i] != -1) return dp[i];
    
    let pick = A[i] + maxAdjacentSum(i-2, A, dp);
    let notPick = 0 + maxAdjacentSum(i-1, A, dp);

    return dp[i] = Math.max(pick, notPick);
} 

let A = [2,1,4,9];
let N = A.length;

let dp = new Array(N).fill(-1);

let ans = maxAdjacentSum(N-1, A, dp);

console.log("Ans: ",ans);