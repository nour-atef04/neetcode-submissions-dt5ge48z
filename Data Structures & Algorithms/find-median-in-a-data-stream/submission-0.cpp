class MedianFinder {
public:

    priority_queue<int> before; // max heap
    priority_queue<int, vector<int>, greater<int>> after; // min heap
    float currMed = 0.0;
    
    MedianFinder() {
    }
    
    void addNum(int num) {
        if(before.empty() || num <= before.top()){
            before.push(num);
        }
        else{
            after.push(num);
        }
        
        if (before.size() > after.size() + 1) {
            after.push(before.top());
            before.pop();
        } else if (after.size() > before.size() + 1) {
            before.push(after.top());
            after.pop();
        }
    }
    
    double findMedian() {
        if((before.size() + after.size()) % 2 == 0){
            currMed = (before.top() + after.top())/2.0;
        }
        else{
            if(before.size() > after.size()) currMed = before.top();
            else currMed = after.top();
        }
        return currMed;
    }
};

// before -> 1
// after -> 3

// if number less than median:
// insert first
// size became odd: first of the av pair
// size became even: average with the number before the median

// if number more than median
// insert first
// size became odd: second of the av pair
// size became even: average with the number after the median