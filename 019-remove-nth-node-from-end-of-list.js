/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     var i = 0, j = 0;
//     var p = head;
// 
//     while (p) {
//         i++;
//         p = p.next;
//     }
// 
//     p = head;
// 
//     while (p) {
//         if (j === i - n - 1) {
//             p.next = p.next.next ? p.next.next : null;
//             break;
//         } else if (i - n - 1 < 0) {
//             return p.next;
//         }
//         j++;
//         p = p.next;
//     }
// 
//     return head;
// };
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    var p = dummy, q = dummy;

    dummy.next = head;

    for (var i = 1; i <= n + 1; i++) {
        q = q.next;
    }

    while (q) {
        p = p.next;
        q = q.next;
    }

    p.next = p.next.next;

    return dummy.next;
};