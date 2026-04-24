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
     * @return {boolean}
     */
    isValidBST(root) {
        function validBST(root, min, max){

            if(root === null) return true;

            // if root is outside range -> false
            if(root.val <= min || root.val >= max) return false;

            return validBST(root.left, min, root.val) && validBST(root.right, root.val, max);

        }
        return validBST(root, -Infinity, Infinity);
    }
}
