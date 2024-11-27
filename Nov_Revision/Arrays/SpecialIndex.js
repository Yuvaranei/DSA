function SpecialIndex(arr){
    let N = arr.length;
    let count = 0;
    
    let PF_even = [];
    let PF_odd = [];

    PF_even[0] = arr[0];
    PF_odd[0] = 0;

    for(let i=1;i<N;i++){
        if(i%2 == 0){
            PF_even[i] = arr[i] + PF_even[i-1];
        } else {
            PF_even[i] = PF_even[i-1];
        }
    }

     for(let i=1;i<N;i++){
        if(i%2 != 0){
            PF_odd[i] = arr[i] + PF_odd[i-1];
        } else {
            PF_odd[i] = PF_odd[i-1];
        }
    }
    
    // console.log("PF_odd..", PF_odd);
    // console.log("PF_even..", PF_even);

    for(let i=0;i<N;i++){
        let total_even_sum = 0;
        let total_odd_sum = 0;

        if(i==0){
            total_even_sum = PF_odd[N-1] - PF_odd[0];
            total_odd_sum = PF_even[N-1] - PF_even[0];
        } else {
            total_even_sum = PF_even[i-1] + (PF_odd[N-1] - PF_odd[i]);
            total_odd_sum = PF_odd[i-1] + (PF_even[N-1] - PF_even[i]);
        }
        // console.log(`${i} index: total_even_sum: ${total_even_sum} total_odd_sum: ${total_odd_sum}`)
        if(total_even_sum == total_odd_sum) count++;
    }
    return count;
}

const arr = [1,2,3,4,5];
// const arr = [4,3,2,7,6,-2];
console.log(SpecialIndex(arr))