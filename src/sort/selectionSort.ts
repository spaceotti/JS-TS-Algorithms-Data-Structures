/**
 * Problem: Selection Sort
 *
 * Sort an array of numbers in ascending order
 * by repeatedly finding the smallest value
 * in the unsorted part and swapping it into place.
 *
 * Time Complexity:
 *  - Best: O(n²)
 *  - Average: O(n²)
 *  - Worst: O(n²)
 *
 * Space Complexity:
 *  - O(1)
 */

//Selection Sort

function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    //SWAP
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

console.log(selectionSort([15, 3, 1, 20, 11]));
console.log(selectionSort([-15, 99, 3, -1, 20, 1, 11]));
