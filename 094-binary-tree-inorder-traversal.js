/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // var res = [];
    // var stack = [];
    // var item;

    // if (!root) {
    //     return;
    // }

    // stack.push(root);
    // while (stack.length) {
    //     item = stack.pop();
    //     res.push(item.val);
    //     root.left && stack.push(root.left);
    //     root.right && stack.push(root.right);
    // }

    // return res;

    var res = [];

    function traversal(root) {
        if (root) {
            root.left && traversal(root.left);
            res.push(root.val);
            root.right && traversal(root.right);
        }
    }

    traversal(root);

    return res;
};