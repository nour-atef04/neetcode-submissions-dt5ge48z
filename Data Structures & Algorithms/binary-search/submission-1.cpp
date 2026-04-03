class Solution {
public:
    int search(vector<int>& nums, int target) {
        int i = 0;
        int j = nums.size() - 1;
        int middle = j + ((i - j) / 2);
        int index = -1;

        while(i <= j){
            if(target > nums[middle]){
                i = middle + 1;
            }
            else if(target < nums[middle]){
                j = middle - 1;
            }
            else{
                return middle;
            }
            middle = j + ((i - j) / 2);
        }

        return index;

    }
};
