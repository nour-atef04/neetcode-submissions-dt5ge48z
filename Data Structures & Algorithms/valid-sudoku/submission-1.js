class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i<9; i++){
            let set = new Set();
            for(let j = 0; j<9; j++){
                let val = board[i][j];
                if(val === ".") continue;
                if(val !== "." && (val < "1" || val > "9")) return false;
                if(set.has(val)) return false;
                set.add(val);
            }
        }

        for(let i = 0; i<9; i++){
            let set = new Set();
            for(let j = 0; j<9; j++){
                let val = board[j][i];
                if(val === ".") continue;
                if(val !== "." && (val < "1" || val > "9")) return false;
                if(set.has(val)) return false;
                set.add(val);
            }
        }


        for(let boxRow = 0; boxRow < 3; boxRow++){
            for (let boxCol = 0; boxCol < 3; boxCol++){
                let set = new Set();
                for(let i = 0; i<3; i++){
                    for(let j = 0; j<3; j++){
                        let r = boxRow * 3 + i;
                        let c = boxCol * 3 + j;

                        let val = board[r][c]
                        if(val === ".") continue;
                if(val !== "." && (val < "1" || val > "9")) return false;
                if(set.has(val)) return false;
                set.add(val);
                    }
                }
            }
        }
        return true;

    }
}
