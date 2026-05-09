class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        if(!grid || grid.length === 0) return 0;

        let rows = grid.length;
        let cols = grid[0].length;

        let maxArea = 0;
        let currArea = 0;

        function dfs(r, c){
            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c] === 0) return;
            grid[r][c] = 0;
            currArea++;
            maxArea = currArea > maxArea ? currArea : maxArea;

            dfs(r-1, c);
            dfs(r+1, c);
            dfs(r, c-1);
            dfs(r, c+1);
        }

        for(let r = 0; r<rows; r++){
            for(let c = 0; c<cols; c++){
                if(grid[r][c] === 1){
                    dfs(r, c);
                    currArea = 0;
                }
            }
        }

        return maxArea;

    }
}
