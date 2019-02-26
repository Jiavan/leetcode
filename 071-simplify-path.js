/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // path = path.split('/');

    // path = path.filter(item => item !== '');
    
    // for (var i = 0; i < path.length; i++) {
    //     if (path[i] !== '') {
    //         if (path[i] === '.') {
    //             path.splice(i, 1);
    //             i--;
    //         } else if (path[i] === '..') {
    //             if (path[i - 1]) {
    //                 console.log(path[i - 1]);
    //                 path.splice(i - 1, 2);
    //                 i = i - 2;
    //             } else {
    //                 path.splice(i, 1);
    //                 i--;
    //             }
    //         }
    //     }
    // }

    // return '/' + path.join('/');

    var res = [];
    var p;

    path = path.split('/');

    for (var i = 0; i < path.length; i++) {
        p = path[i];
        if (p === '..') {
            res.pop();
        } else if (p !== '.' && p !== '') {
            res.push(p);
        }
    }

    return '/' + res.join('/');
};
