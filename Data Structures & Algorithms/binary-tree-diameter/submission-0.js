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
    diameterOfBinaryTree(root) {
        if(root === null) return 0;
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);
        let diameter = left + right;
        let sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right));
        return Math.max(diameter, sub)
    }

    dfs(root){
        if(root === null) return 0;
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);
        return Math.max(left, right) + 1;
    }
}
