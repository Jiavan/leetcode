# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        if not l1:
            return l2
        if not l2:
            return l1

        if l1.val + l2.val < 10:
            l3 = ListNode(l1.val + l2.val)
            l3.next = self.addTwoNumbers(l1.next, l2.next)
        else:
            l3 = ListNode(l1.val + l2.val - 10)
            tmp = ListNode(1)
            tmp.next = None
            l3.next = self.addTwoNumbers(l1.next, self.addTwoNumbers(tmp, l2.next))

        return l3

    # def addTwoNumbers(self, l1, l2):
    #     if not l1:
    #         return l2
    #     if not l2:
    #         return l1;

    #     val1, val2 = [l1.val], [l2.val]
    #     while l1.next:
    #         val1.append(l1.next.val)
    #         l1 = l1.next

    #     while l2.next:
    #         val2.append(l2.next.val)
    #         l2 = l2.next

    #     str1 = ''.join(str(i) for i in val1[::-1])
    #     str2 = ''.join(str(i) for i in val2[::-1])

    #     tmp = str(int(str1) + int(str2))[::-1]
    #     res = ListNode(int(tmp[0]))
    #     run_res = res

    #     for i in range(1, len(tmp)):
    #         run_res.next = ListNode(int(tmp[i]))
    #         run_res = run_res.next

    #     return res
