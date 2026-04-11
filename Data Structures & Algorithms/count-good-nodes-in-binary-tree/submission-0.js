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
     * @return {number}
     */
    goodNodes(root) {
        function dfs(node, max){
            if(node === null) return 0;
            
            let count = 0;

            if(node.val >= max){
                count++;
                max = node.val;
            }

            count+=dfs(node.left, max);
            count+=dfs(node.right, max);

            return count;

        }
        return dfs(root, root.val);
    }

}


