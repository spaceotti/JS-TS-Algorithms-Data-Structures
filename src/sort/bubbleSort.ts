/**
 * Problem: Bubble Sort
 *
 * Sort an array of numbers in ascending order
 * by repeatedly comparing adjacent values
 * and swapping them if needed.
 *
 * Time Complexity:
 *  - Worst / Average: O(n²)
 *  - Best (optimized): O(n)
 *
 * Space Complexity:
 *  - O(1)
 *
 * Optimization:
 *  - Stop early if no swaps occur in a pass.
 */

const numArr = [99, 12, 1, 45, 23, 4, 87];
const numArr2 = [15, 1, 2, 3, 4, 5];

function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //Swap adjacent values
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(`Pass ${arr.length - i + 1} complete.`);
  }
  return arr;
}

//Optimised version with early exit

function bubbleSortOpt(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //Swap adjacent values
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    console.log(`Pass ${arr.length - i + 1} complete.`);
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([...numArr]));
console.log(bubbleSortOpt([...numArr]));

console.log("------------------------");

console.log(bubbleSort([...numArr2]));
console.log(bubbleSortOpt([...numArr2]));
