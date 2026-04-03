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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let temp = head;
        let len = 0;
        while(temp){
            len++;
            temp = temp.next;
        }

        // remove head
        if (n === len) {
            return head.next;
        }

        let steps = len - n - 1; // 2, we need pointer at 3

        let temp2 = head;
        while(steps > 0){
            steps--;
            temp2 = temp2.next;
        }

        if(temp2.next === null){
            temp2 = null;
        }
        else{
            let temp3 = temp2.next.next;
            temp2.next = temp3;
        }

        return head;

    }
}
