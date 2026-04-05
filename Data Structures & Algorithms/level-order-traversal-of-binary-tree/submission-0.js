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
     * @return {number[][]}
     */
    levelOrder(root) {
        let q = [];
        let q2 = [];
        let res = [];

        if (!root) return [];
        q.push(root);
        while(q.length > 0){
            let temp = [];
            while(q.length > 0){
                let child = q.shift();
                if(child.left) q2.push(child.left);
                if(child.right) q2.push(child.right);
                temp.push(child.val);
            }
            q = [...q2];
            q2 = [];
            res.push(temp);
        }

        return res;
    }
}

// q -> 
// q2 -> 4 5 6 7
