/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const digitos = x.toString().split('');
    let novaString = '';
    
    for (let i = digitos.length - 1; i >= 0; i--) {
        novaString += digitos[i]
    }

    return x.toString() === novaString;
};

isPalindrome(133)