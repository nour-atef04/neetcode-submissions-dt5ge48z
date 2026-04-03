class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        stack<int> st;
        int n =  temperatures.size(); 
        vector<int> res(n, 0);

        for(int i = 0; i<n; i++){
            int temp = temperatures[i];
            if(st.empty()){ st.push(i); continue; }
            if(temp > temperatures[st.top()]){
                while(!st.empty() && temperatures[st.top()] < temp){
                    res[st.top()] = i - st.top();
                    st.pop();
                }
            }
            st.push(i);
        }

        return res;
    }
};

// 30, 38
// 0, 1