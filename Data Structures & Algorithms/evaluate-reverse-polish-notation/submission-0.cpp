class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;

        for(int i = 0; i<tokens.size(); i++){
            if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/") st.push(stoi(tokens[i]));
            else{
                int num2 = st.top(); st.pop();
                int num1 = st.top(); st.pop();
                
                int res = 0;
                if (tokens[i] == "+") res = num1 + num2;
                else if (tokens[i] == "-") res = num1 - num2;
                else if (tokens[i] == "*") res = num1 * num2;
                else if (tokens[i] == "/") res = num1 / num2;

                st.push(res);
            }
        }
        return st.top();
    }
};
