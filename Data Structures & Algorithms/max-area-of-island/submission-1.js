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

        function dfs(r, c){
            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c] === 0) return 0;
            grid[r][c] = 0;

            let currArea = 1;

            currArea += dfs(r-1, c);
            currArea += dfs(r+1, c);
            currArea += dfs(r, c-1);
            currArea += dfs(r, c+1);

            return currArea;
        }

        for(let r = 0; r<rows; r++){
            for(let c = 0; c<cols; c++){
                if(grid[r][c] === 1){
                    let currArea = dfs(r, c);
                    maxArea = currArea > maxArea ? currArea : maxArea;
                }
            }
        }

        return maxArea;

    }
}
