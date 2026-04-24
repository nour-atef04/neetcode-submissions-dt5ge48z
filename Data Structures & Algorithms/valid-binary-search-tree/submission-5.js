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
        let st = [];

        function validBST(root, st){
            if(root){
                validBST(root.left, st);
                st.push(root.val);
                validBST(root.right, st);
            }
        }
        validBST(root, st);

        let min = st.pop();
        while(st.length !== 0){
            let node = st.pop();
            if(node >= min) return false;
            min = node;
        }
        return true;

    }
}
