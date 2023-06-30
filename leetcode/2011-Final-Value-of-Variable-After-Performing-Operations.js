/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let len = operations.length;
    let X = 0;
    for (let i = 0; i < len; i++) {
        const element = operations[i];

        if (element === '--X' || element === 'X--') {
            X -= 1;
        } else {
            X += 1;
        }
    }
    return X;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.