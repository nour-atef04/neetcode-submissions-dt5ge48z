#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;

        // max heap: pair<value, index>
        priority_queue<pair<int,int>> pq;

        for (int i = 0; i < nums.size(); i++) {

            // push current element
            pq.push({nums[i], i});

            // remove elements outside window
            while (!pq.empty() && pq.top().second <= i - k) {
                pq.pop();
            }

            // window starts producing answers when i >= k-1
            if (i >= k - 1) {
                result.push_back(pq.top().first);
            }
        }

        return result;
    }
};
