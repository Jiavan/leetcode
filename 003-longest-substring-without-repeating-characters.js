/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = 0;

    for (var i = 0; i < s.length; i++) {
        var set = new Set();
        set.add(s.charAt(i));
        for (var j = i + 1; j < s.length; j++) {
            if (set.has(s.charAt(j))) {
                break;
            }
            set.add(s.charAt(j));
        }

        len = Math.max(set.size, len);
    }

    return len;
};