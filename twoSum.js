/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    soma = 0;
    for (let i = 0; i < nums.length; i++) {
        const firstElement = Number(nums[i]);

        for (let j = i + 1; j < nums.length; j++) {
            soma = firstElement + Number(nums[j]);

            if (soma === target) {
                return Array(i, j)
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));