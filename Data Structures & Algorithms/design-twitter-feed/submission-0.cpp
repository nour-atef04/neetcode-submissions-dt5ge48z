class Twitter {
public:

    unordered_map<int, vector<pair<int, int>>> posts;
    unordered_map<int, unordered_set<int>> followings;
    int time = 0;

    Twitter() {
    }
    
    void postTweet(int userId, int tweetId) {
        time++;
        posts[userId].push_back({time, tweetId});
    }
    
    vector<int> getNewsFeed(int userId) {
        followings[userId].insert(userId); // to get user's posts too

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> feed;

        for(int followee : followings[userId]){
            for(auto &t : posts[followee]){
                feed.push(t);
                if(feed.size() > 10) feed.pop();
            }
        }

        vector<int> res;
        while(!feed.empty()){
            res.push_back(feed.top().second);
            feed.pop();
        }
        reverse(res.begin(), res.end());
        return res;

    }
    
    void follow(int followerId, int followeeId) {
        if (followerId != followeeId) {
            followings[followerId].insert(followeeId);
        }
    }
    
    void unfollow(int followerId, int followeeId) {
        followings[followerId].erase(followeeId);
    }
};
