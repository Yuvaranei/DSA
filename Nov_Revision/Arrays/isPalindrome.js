function isPalindrome(str){
    let N = str.length;
    let i=0, j=N-1;

    while(i<j){
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
 }

 const string = 'madamu';

console.log(isPalindrome(string));