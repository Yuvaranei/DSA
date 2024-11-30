function kthSymbolEasy(k){
    if(k==0){
        return 0;
    }

    let parent = kthSymbolEasy(k/2);
    if(k%2 == 0) return parent;
    else return 1 - parent;
 }

const arr = [1,2,3,4];
console.log(kthSymbolEasy(11));