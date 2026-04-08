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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];

        function dfs(root, depth){
            if(root === null) return;

            if(res.length === depth) res.push(root.val);

            dfs(root.right, depth+1);
            dfs(root.left, depth+1);
        }

        dfs(root, 0);

        return res;
    }
}

// q -> 4, 5
// res -> 1, 3
