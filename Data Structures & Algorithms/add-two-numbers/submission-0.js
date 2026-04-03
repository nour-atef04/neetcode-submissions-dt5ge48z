/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let temp1 = l1;
        let temp2 = l2;
        let carry = 0;
        let res = new ListNode(0);
        let tempRes = res;

        while(temp1 || temp2 || carry){

            let val1 = temp1 ? temp1.val : 0;
            let val2 = temp2 ? temp2.val : 0;

            let sum = val1 + val2 + carry;

            carry = Math.floor(sum / 10);

            let newNode = new ListNode(sum % 10);

            tempRes.next = newNode;
            tempRes = tempRes.next;
            if(temp1) temp1 = temp1.next;
            if(temp2) temp2 = temp2.next;
        }

        return res.next;
    }
}
