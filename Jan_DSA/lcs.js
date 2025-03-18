let s1 = ['d', 'e', 'm', 'o', 'c', 'r', 'a', 't'];
let s2 = ['r','e','p','u','b','l','i','c','a','n'];

let N = s1.length;
let M = s2.length;

const dp = Array.from({length: N+1}, () => new Array(M+1).fill(-1))
function lcs(s1, s2, i, j, dp){
    if(i<0 || j<0) return 0;
    if(dp[i][j] != -1) return dp[i][j];
    if(s1[i] == s2[j]){
        dp[i][j] = 1+lcs(s1,s2,i-1,j-1, dp);
    } else {
        dp[i][j] = Math.max(lcs(s1,s2,i-1,j,dp), lcs(s1,s2,i,j-1,dp));
    }
    return dp[i][j];
}


const ans = lcs(s1, s2, N, M, dp);
console.log(ans);