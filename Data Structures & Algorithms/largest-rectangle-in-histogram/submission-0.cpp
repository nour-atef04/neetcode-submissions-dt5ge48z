class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<pair<int, int>> st; // stores {height, index}
        int maxArea = 0;

        for (int i = 0; i < heights.size(); i++) {
            int index = i;
            while (!st.empty() && st.top().first > heights[i]) {
                index = st.top().second;
                maxArea = max(maxArea, st.top().first * (i - st.top().second));
                st.pop();
            }
            st.push({heights[i], index});
        }

        while (!st.empty()) {
            maxArea = max(maxArea, st.top().first * (int(heights.size()) - st.top().second));
            st.pop();
        }

        return maxArea;
    }
};
