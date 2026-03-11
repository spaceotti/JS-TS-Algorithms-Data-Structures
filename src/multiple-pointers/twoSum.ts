/**
 * Problem: Two Sum (target = 0)
 *
 * Given a sorted array of integers, find the first pair of numbers
 * whose sum equals 0.
 *
 * Example:
 * [-3, -2, -1, 0, 1, 2, 3] → [-3, 3]
 *
 * This file contains two implementations:
 *
 * 1. Naive Solution (Brute Force)
 *    - Checks every possible pair in the array
 *    - Time Complexity: O(n²)
 *    - Space Complexity: O(1)
 *
 * 2. Multiple Pointers Solution
 *    - Uses two pointers (left and right) to scan the array
 *    - Takes advantage of the fact that the array is sorted
 *    - Time Complexity: O(n)
 *    - Space Complexity: O(1)
 *
 * Pattern:
 * Multiple Pointers
 */
//1. Naive solution O(n2)
function twoSumNaive(arr: number[]): [number, number] | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

console.log(twoSumNaive([-3, -2, -1, 0, 1, 2, 3]));
console.log(twoSumNaive([-2, 0, 1, 3]));

console.log("---------");

//2. Multiple Pointers Solution O(n)
function twoSumMP(arr: number[]): [number, number] | undefined {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

console.log(twoSumMP([-3, -2, -1, 0, 1, 2, 3]));
console.log(twoSumMP([-2, 0, 1, 3]));
