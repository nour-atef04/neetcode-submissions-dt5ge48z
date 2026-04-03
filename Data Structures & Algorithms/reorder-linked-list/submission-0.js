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
     * @return {void}
     */
    reorderList(head) {

        if (!head || !head.next) return;

        let len = 0;
        let temp = head;
        while(temp){
            len++;
            temp = temp.next;
        }

        let tempPrev = head;
        for(let i = 1; i < Math.ceil(len/2); i++){
            tempPrev = tempPrev.next;
        }

        let tempNext = tempPrev.next;
        tempPrev.next = null;

        let prev = null;
        while(tempNext){
            let nodeTemp = tempNext.next;
            tempNext.next = prev;
            prev = tempNext;
            tempNext = nodeTemp;
        }

        let tempStart = head;
        let tempEnd = prev;

        while(tempStart && tempEnd){
            let tempStartNext = tempStart.next;
            let tempEndNext = tempEnd.next;

            tempStart.next = tempEnd;
            tempEnd.next = tempStartNext;

            tempStart = tempStartNext;
            tempEnd = tempEndNext;

        }

    }
}

// 0 1 2 3
// 6 5 4

// 0 1 2 3 4 5 6
// 6 5 4 3 2 1 0