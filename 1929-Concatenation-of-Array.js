/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    // PRIMEIRA SOLUÇÃO
    // return [...nums, ...nums];

    //SEGUNDA SOLUÇÃO
    const initialLen = nums.length;
    const doubleLen = nums.length * 2;
    let count = 0;
    let arrAux = [];
    for (let i = 0; i < doubleLen; i++) {
        if (i >= initialLen) {
            arrAux[i] = nums[count];
            count++;
        } else {
            arrAux[i] = nums[i];
        }
    }
    return arrAux;
};

console.log(getConcatenation([1, 3, 2, 1]));

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]