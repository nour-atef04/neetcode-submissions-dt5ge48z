class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int i = 0; // 0
        int j = matrix.size() - 1; // 2
        int middle = i + ((j - i) / 2);
        int lastCol = matrix[0].size() - 1;
        int firstCol = 0;
        
        while(i <= j){ // keep searching until first max
            if(target > matrix[middle][lastCol]){
                i = middle + 1;
                middle = i + ((j - i) / 2);
            }
            else if(target < matrix[middle][firstCol]){
                j = middle - 1;
                middle = i + ((j - i) / 2);
            }
            else{
                break;
            }
        }

        if(i > j) return false;

        i = 0;
        int row = middle;
        j = matrix[0].size() - 1;
        int middleCol = i + ((j - i) / 2);

        while(i<=j){
            if(target > matrix[middle][middleCol]){
                i = middleCol + 1;
            }
            else if(target < matrix[middle][middleCol]){
                j = middleCol - 1;
            }
            else{
                return true;
            }
            middleCol = i + ((j - i) / 2);
        }
        return false;

    }
};

// 4 6 8 9 13 40 50 100 -> 15