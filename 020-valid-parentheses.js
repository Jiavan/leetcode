/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function (s) {
    var map = {
            ')': '(',
            ']': '[',
            '}': '{'
        },
        stack = [];
    if (s.trim() == '') {
        return true;
    }

    if (s.trim().length == 1) {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        if (s[i] in map) {
            if (map[s[i]] != stack.pop()) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};