/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0),
        node = result,
        m,
        n,
        i,
        j,
        k,
        sum;

    while (l1 || l2) {
        i = node.val || 0;
        j = (l1 && l1.val) || 0;
        k = (l2 && l2.val) || 0;
        sum = i + j + k;

        if (sum >= 10) {
            m = 1;
            n = sum - 10;
        } else {
            m = 0;
            n = sum;
        }

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;

        if (m > 0) {
            node.next = new ListNode(m);
        } else if (l1 || l2) {
            node.next = new ListNode(0);
        }

        node.val = n;
        if (m || l1 || l2) {
            node = node.next;
        }
    }

    return result;
};