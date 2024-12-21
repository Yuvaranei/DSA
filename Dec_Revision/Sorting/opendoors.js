function openDoors(N){
    let ans = [];

    for(let i=1;i*i<=N;i++){
        ans.push(i*i);
    }

    return ans;
}

console.log(openDoors(10));