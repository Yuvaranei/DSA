function toggleSmallCapitals(str){
    let N = str.length;
    let ans = [];
     for(let i=0;i<N;i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            ans[i] = String.fromCharCode(str.charCodeAt(i) - 32);
        } else if(str[i] >= 'A' && str[i] <= 'Z'){
            ans[i] = String.fromCharCode(str.charCodeAt(i) + 32);
        } else {
            ans[i] = str[i];
        }
     }

     return ans.join('');
 }

 const string = 'YuvaRanei Perumal';

console.log(toggleSmallCapitals(string));