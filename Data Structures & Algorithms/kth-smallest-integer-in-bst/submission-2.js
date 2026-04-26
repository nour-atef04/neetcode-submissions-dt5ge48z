/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let kthMin;
        function inOrder(root){
            if (!root || k === 0) return;
            inOrder(root.left);
            if(k > 0){
                k--;
                kthMin = root.val;
            }
            inOrder(root.right);
            
        }
        inOrder(root);
        return kthMin;
    }
}
