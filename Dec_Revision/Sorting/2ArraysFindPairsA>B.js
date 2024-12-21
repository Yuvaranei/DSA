function merge(A, B, N, M){
    let c=[], k=0;

    let i=0, j=0, count = 0;

    while(i<N && j<M){
        // console.log("A[i] = ", A[i], " B[j] = ", B[j]);
        if(A[i] <= B[j]){
            c[k] = A[i];
            k++;
            i++;
        } else {
            count = count + (N - i);
            c[k] = B[j];
            k++;
            j++;
        }
    }

    // while(i<N){
    //     c[k] = A[i];
    //     k++;
    //     i++;
    // }

    // while(j<M){
    //     c[k] = B[j];
    //     k++;
    //     j++;
    // }
    return count;
}

function findPairsAGreaterThanB(A, B){
    A.sort((a,b) => a-b);
    B.sort((a,b) => a-b);
    return merge(A, B, A.length, B.length);
}

// const A = [7,3,5];
// const B = [2,0,6];
const A = [3,6,8,10,15];
const B = [1,2,7,12,18];

console.log(findPairsAGreaterThanB(A, B));