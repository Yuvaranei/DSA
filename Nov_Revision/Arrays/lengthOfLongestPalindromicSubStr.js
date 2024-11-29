function lengthOfLongestPalindromicSubStr(str){
    let N = str.length;
    // let i=0, j=N-1;

    let max = 1;

    //Odd length palindrome
    for(let i=0;i<N;i++){
        let s=i, e=i;

        while(s>=0 && e<N && str[s] == str[e]){
            s--;
            e++;
        }
        max = Math.max(max, e-s-1);
    }

    //Even length palindrome
    for(let i=0;i<N;i++){
        let s=i, e=i+1;

        while(s>=0 && e<N && str[s] == str[e]){
            s--;
            e++;
        }
        max = Math.max(max, e-s-1);
    }

    return max;
 }

 const string = 'acxyzeyxbdeyreodq';

console.log(lengthOfLongestPalindromicSubStr(string));