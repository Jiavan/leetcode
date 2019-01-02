/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = s.charAt(0);

    for (var i = 0; i < s.length; ++i) {
        for (var j = result.length + 1; j <= s.length; ++j) {
            var substr = s.substr(i, j);

            if (isPalindrome(substr)) {
                if (substr.length > result.length) {
                    result = substr;
                }
            }
        }
    }  

    return result;
};

function isPalindrome(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
            return false;
        }
    }

    return true;
}