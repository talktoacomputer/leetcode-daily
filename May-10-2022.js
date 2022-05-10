/**
 * Challenge: https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// Recursive approach solution adopted from a StackExchange answer @ https://codereview.stackexchange.com/a/7025

var combinationSum3 = (k, n) => {
  const combinations = (str) => {
    const findCombo = (current, remaining, a) => {
      if (!current && !remaining) return;
      if (!remaining) {
        a.push(current.split(""));
      } else {
        findCombo(current + remaining[0], remaining.slice(1), a);
        findCombo(current, remaining.slice(1), a);
      }
      return a;
    };
    return findCombo("", str, []);
  };

  const findArrSum = (arr) => {
    let sum = 0;
    arr.forEach((e) => {
      sum += Number.parseInt(e);
    });
    return sum;
  };

  return combinations("123456789").filter(
    (c) => c.length === k && findArrSum(c) === n
  );
};
