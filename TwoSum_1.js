// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var existMap = {};
    for(var i =0; i<nums.length; i++){
        if(existMap[target - nums[i]] != undefined){

            result.push(nums.indexOf(target - nums[i]));
            result.push(i);

        }
            existMap[nums[i]] = i;
    }
    return result;
};

var result = twoSum([2, 7, 11, 15], 9);

console.log(result);