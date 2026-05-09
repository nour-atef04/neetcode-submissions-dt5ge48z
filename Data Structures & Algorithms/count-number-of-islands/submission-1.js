class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0) return 0;
        let rows = grid.length;
        let cols = grid[0].length;

        let islands = 0;

        function bfs(r, c){
            let q = [];
            q.push([r, c]);
            while(q.length){
                let [r, c] = q.pop();
                if(grid[r][c] === "1"){
                    grid[r][c] = "0";
                    if(r+1<rows) q.push([r+1, c]);
                    if(r-1>=0) q.push([r-1, c]);
                    if(c+1<cols) q.push([r, c+1]);
                    if(c-1>=0) q.push([r, c-1]);
                }
            }
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === "1"){
                    islands++;
                    bfs(r, c);
                }
            }
        }

        return islands;
    }
}
