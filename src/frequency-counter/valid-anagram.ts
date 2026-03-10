/**
 * Problem: Valid Anagram
 *
 * Given two strings, determine if the second string
 * is an anagram of the first.
 *
 * Pattern: Frequency Counter
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charMap: Record<string, number> = {};

  for (let char of s) {
    charMap[char] = (charMap[char] ?? 0) + 1;
  }

  for (let char of t) {
    if (!(char in charMap)) return false;
    charMap[char]--;
    if (charMap[char] < 0) return false;
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("qwerty", "qewtry")); //true
console.log(validAnagram("hello", "hel")); // false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); // false
