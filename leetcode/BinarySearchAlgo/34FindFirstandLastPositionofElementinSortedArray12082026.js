/**
 * 
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0
    let  h = nums.length - 1;
    let m = 0
    let found = false;
    let ans = [-1,-1]
    while(l <= h){
        m = l + Math.floor((h-l)/2);
        if(nums[m] < target){
            l = m + 1;
        }else if(nums[m] > target){
            h = m - 1;
        }else{
            ans[0]=m
            h = m-1
        }
    }
    l = 0
    h = nums.length - 1;
    m = 0
    while(l <= h){
        m = l + Math.floor((h-l)/2);
        if(nums[m] < target){
            l = m + 1;
        }else if(nums[m] > target){
            h = m - 1;
        }else{
            ans[1]=m
            l = m+1
        }
    }
    
    return ans
};