/**
 * Sliding Window Pattern – maxSubarraySum
 *
 * Problem:
 * Find the maximum sum of a subarray with fixed length n.
 *
 * Approaches:
 * 1) Naive (O(n * k)):
 *    Recompute the sum for each window.
 *
 * 2) Sliding Window (O(n)):
 *    - Compute the first window once
 *    - Slide the window by updating the sum:
 *      tempSum = tempSum - arr[i - n] + arr[i]
 *
 * Edge Cases:
 * - Return null if n <= 0 or n > arr.length
 *
 * Key Idea:
 * Reuse previous computation instead of recalculating the full sum.
 */

//1. Naive approach
function maxSubarraySumNaive(arr: number[], n: number): number | null {
  if (arr.length < n || n <= 0) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumNaive([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumNaive([], 4)); // null
console.log(maxSubarraySumNaive([1, 2, 3, 4], -1)); // null

console.log("-------");

//2. Sliding window
function maxSubarraySum(arr: number[], n: number): number | null {
  if (arr.length < n || n <= 0) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([1, 2, 3, 4], -1)); // null
