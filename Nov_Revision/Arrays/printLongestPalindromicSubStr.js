function lengthOfLongestPalindromicSubStr(str){
    let N = str.length;
    // let i=0, j=N-1;

    let max = 1;
    let maxString = [];
    

    //Odd length palindrome
    for(let i=0;i<N;i++){
        let s=i, e=i;
        let substr_start = [];
        let substr_end = [];
        while(s>=0 && e<N && str[s] == str[e]){

            if(s != e){
                substr_start.push(str[s]);
                substr_end.push(str[e]);
            } else {
                substr_start.push(str[s]);
            }
            

            s--;
            e++;
        }
        if(e-s-1 > max) {
            max = e-s-1;
            maxString = [...substr_start.reverse(),...substr_end];
        }
        // max = Math.max(max, e-s-1);
    }

    //Even length palindrome
    for(let i=0;i<N;i++){
        let s=i, e=i+1;

        let substr_start = [];
        let substr_end = [];
        while(s>=0 && e<N && str[s] == str[e]){
            substr_start.push(str[s]);
            substr_end.push(str[e]);

            s--;
            e++;
        }
        if(e-s-1 > max) {
            max = e-s-1;
             maxString = [...substr_start.reverse(),...substr_end];
        }
        // max = Math.max(max, e-s-1);
    }
    console.log(maxString);
    return max;
 }

 const string = 'adaebcdfdcbetggte';

console.log(printLongestPalindromicSubStr(string));