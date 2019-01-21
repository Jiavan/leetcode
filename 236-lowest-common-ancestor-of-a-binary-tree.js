/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var left, right;

    if (root === null) {
        return null;
    }

    if (root === p || root === q) {
        return root;
    }

    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);

    if (left == null) {
        return right;
    }

    if (right == null) {
        return left;
    }

    return root;
};