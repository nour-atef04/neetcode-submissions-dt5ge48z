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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwo(list1, list2){

        let newNode = new ListNode();
        let newTemp = newNode;

        let temp1 = list1;
        let temp2 = list2;
        while(temp1 && temp2){
            if(temp1.val < temp2.val){
                let nextNode = new ListNode(temp1.val, null);
                newTemp.next = nextNode;
                newTemp = newTemp.next;
                temp1 = temp1.next;
            }
            else if(temp1.val > temp2.val){
                let nextNode = new ListNode(temp2.val, null);
                newTemp.next = nextNode;
                newTemp = newTemp.next;
                temp2 = temp2.next;
            }
            else{
                let nextNode = new ListNode(temp1.val, null);
                newTemp.next = nextNode;
                newTemp = newTemp.next;
                let nextNode2 = new ListNode(temp1.val, null);
                newTemp.next = nextNode2;
                newTemp = newTemp.next;
                temp1 = temp1.next;
                temp2 = temp2.next;
            }
        }

        if(temp1){
            newTemp.next = temp1;
        }
        if(temp2){
            newTemp.next = temp2;
        }

        return newNode.next;
    }

    mergeKLists(lists) {

        if(lists.length === 0) return null;
        if(lists.length === 1) return lists[0];

        let mergedList = this.mergeTwo(lists[0], lists[1]);
        
        for(let i = 2; i<lists.length; i++){
            mergedList = this.mergeTwo(mergedList, lists[i]);
        }

        return mergedList;

    }


}
