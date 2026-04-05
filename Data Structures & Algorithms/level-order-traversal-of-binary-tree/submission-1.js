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
        let res = [];

        if (!root) return [];
        q.push(root);
        while(q.length > 0){
            let temp = [];
            let len = q.length;
            for(let i = 0; i<len; i++){
                let child = q.shift();
                if(child.left) q.push(child.left);
                if(child.right) q.push(child.right);
                temp.push(child.val);
            }
            res.push(temp);
        }

        return res;
    }
}

// q -> 
// q2 -> 4 5 6 7
