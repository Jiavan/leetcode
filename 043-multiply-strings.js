/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var arrs = [],
        res = [0];

    for (var i = 0; i < num2.length; i++) {
        arrs.push([]);
    }

    for (var i = num2.length - 1; i >= 0; i--) {
        var isAddPreSum = false;
        for (var j = num1.length - 1; j >= 0; j--) {
            var k = arrs.length - i - 1,
                x = num2[i] * num1[j] + (isAddPreSum ? arrs[k][0] : 0);

            arrs[k].length && isAddPreSum && arrs[k].shift();
            if (x >= 10) {
                arrs[k].unshift(parseInt(x / 10), x % 10);
                isAddPreSum = true;
            } else {
                arrs[k].unshift(x);
                isAddPreSum = false;
            }
        }
    }

    for (var i = 0; i < arrs.length; i++) {
        arrs[i] = arrs[i].concat(Array(i).fill(0)).reverse();
    }

    for (var i = 0; i < arrs[arrs.length - 1].length; i++) {
        var sum = 0;

        for (var j = 0; j < arrs.length; j++) {
            sum += arrs[j][i] ? arrs[j][i] : 0;
        }

        sum += res[res.length - 1];
        res.pop();
        if (sum >= 10) {
            res.push(sum % 10, parseInt(sum / 10));
        } else {
            res.push(sum, 0);
        }
    }

    return res.reverse().join('').replace(/^0{0,}/, '') || '0';
};