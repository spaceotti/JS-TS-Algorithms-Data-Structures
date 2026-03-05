/**
 * Problem: Same Frequency
 *
 * Given two arrays, check if the second array contains
 * the squares of the values in the first array.
 *
 * Time Complexity:
 *  - Brute Force: O(n²)
 *  - Frequency Counter: O(n)
 */

//Naive solution O(n²))

function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 4], [16, 4, 1])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 3], [4, 4, 1])); //false

console.log("-------------------");

//Frequency counter O(n)
function sameFC(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1: Record<number, number> = {};
  let frequencyCounter2: Record<number, number> = {};

  for (let val of arr1) {
    if (frequencyCounter1[val]) {
      frequencyCounter1[val]++;
    } else {
      frequencyCounter1[val] = 1;
    }
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (
      frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[Number(key)]
    ) {
      return false;
    }
  }
  return true;
}

console.log(sameFC([1, 2, 2, 3], [4, 1, 9, 4])); // true
console.log(sameFC([1, 2, 4], [16, 4, 1])); //true
console.log(sameFC([1, 2, 3], [1, 9])); //false
console.log(sameFC([1, 2, 3], [4, 4, 1])); //false
