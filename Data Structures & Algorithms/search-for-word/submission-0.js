class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function dfs(i, j, n){
            if(n === word.length) return true;
            if(i === board.length || j === board[0].length || i < 0 || j < 0 || board[i][j] !== word[n] || board[i][j] === "/") return false;
            
            board[i][j] = "/";
        
            const res = dfs(i+1, j, n+1) || dfs(i, j+1, n+1) || dfs(i-1, j, n+1) || dfs(i, j-1, n+1);
            
            board[i][j] = word[n];

            return res;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}

// found = [0, 2]
// n = 0