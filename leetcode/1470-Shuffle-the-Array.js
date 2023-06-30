/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function (nums, n) {
    let xArr = [];
    let yArr = [];
    let tempArr = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (i >= n) {
            yArr.push(element);
        } else {
            xArr.push(element);
        }
    }

    for (let y = 0; y < n; y++) {
        tempArr.push(xArr[y]);
        tempArr.push(yArr[y]);
    }

    return tempArr;
};

shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);