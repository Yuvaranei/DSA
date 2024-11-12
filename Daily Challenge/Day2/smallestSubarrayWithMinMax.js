//Return the length of the smallest subarray which has both min & max of the whole array

function smallestSubarray(nums){
    const minEle = Math.min(...nums);
    const maxEle = Math.max(...nums);
    const N = nums.length;

    let lastMin = -1;
    let lastMax = -1;
    let ans = N;

    for(let i=N-1;i>=0;i--){
        if(nums[i] == minEle){
            lastMin = i;
            if(lastMax != -1){
                ans = Math.min(ans, lastMax - lastMin + 1);
            }
        }

        if(nums[i] == maxEle){
            lastMax = i;
            if(lastMin != -1){
                ans = Math.min(ans, lastMin - lastMax + 1);
            }
        }
    }
    return ans;
}


const arr = [1,2,3,4,5];

const result = smallestSubarray(arr);

console.log(result);