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
        let q = [];
        if(root === null) return [];
        q.push(root);

        let res = [];

        while(q.length !== 0){
            let len = q.length;
            for(let i=0; i<len; i++){
                let node = q[0];
                if(i < len-1) q.shift();
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            let node = q[0];
            res.push(node.val);
            q.shift();
        }

        return res;
    }
}

// q -> 4, 5
// res -> 1, 3
