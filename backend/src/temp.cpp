#include <bits/stdc++.h>
using namespace std;

int maxFileTransfer(vector<int>& files) {
    int n = files.size();
    vector<int> dp(n, 0);
    
    int maxSum = 0;
    
    for (int i = 0; i < n; i++) {
        dp[i] = files[i]; // Start with the current file capacity
        for (int j = 0; j < i; j++) {
            if ((files[i] - files[j]) >= (i - j)) {
                dp[i] = max(dp[i], dp[j] + files[i]);
            }
        }
        maxSum = max(maxSum, dp[i]);
    }
    
    return maxSum;
}

int main() {
    int n;
    cin >> n;
    vector<int> files(n);
    for (int i = 0; i < n; i++) {
        cin >> files[i];
    }
    cout << maxFileTransfer(files) << endl;
    return 0;
}
