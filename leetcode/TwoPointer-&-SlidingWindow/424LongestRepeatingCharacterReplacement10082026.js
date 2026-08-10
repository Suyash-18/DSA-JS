/**
 * 
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let arr = new Array(26).fill(0);
    let l = r = 0;
    let max = 0;
    arr[s.charCodeAt(0) - 65] = 1;
    while(r < s.length){
        if(windowValid(arr,k)){
            max = Math.max(max,  r-l+1);
            ++r;
            ++arr[s.charCodeAt(r) - 65];
        }else{
            --arr[s.charCodeAt(l) - 65];
            ++l;
        }
    }
    return max;
};

var windowValid = (arr,k) =>{
    let total = max = 0;
    for(let i = 0; i < 26; i++){
        total = total + arr[i];
        max = Math.max(max, arr[i]);
    }
    return (total - max <= k)
}